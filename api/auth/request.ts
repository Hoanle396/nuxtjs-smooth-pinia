import { request } from "@/api/axios";
import { ILoginRequest } from "./types";

export const loginRequest = async (payload: ILoginRequest) => {
  const { data } = await request({
    url: "/login",
    method: "POST",
    data: payload,
  });
  return data;
};
