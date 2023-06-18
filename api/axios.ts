import { getLocalStorage, removeLocalStorage } from "@/utils/common";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_URL, STORAGE_KEY } from "@/utils/constants";

import { createToastInterface } from "vue-toastification";

const toast = createToastInterface();

export const request = axios.create({
  baseURL: API_URL,
});

const handleError = async (error: any) => {
  const data = error?.response?.data;
  const isTokenExpired = error?.response?.status === 401;

  if (error?.response?.status === 403) {
    return (window.location.href = "/403");
  }
  if (isTokenExpired) {
    removeLocalStorage(STORAGE_KEY.accessToken);
    toast.error("Your session has expired. Please login again.");
    window.location.href = "/login";
    return Promise.reject(data);
  }
  return Promise.reject(data);
};

const handleSuccess = (res: AxiosResponse) => {
  return res;
};

const handleRequest = (config: any) => {
  const token = getLocalStorage(STORAGE_KEY.accessToken);

  if (token) {
    config = {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return config;
};

request.interceptors.response.use(handleSuccess, handleError);

request.interceptors.request.use(handleRequest, (error) =>
  Promise.reject(error)
);
