export const __prod__ = process.env.NUXT_ENV == "production";
export const API_URL = process.env.API_URL ?? "http://localhost:4000/api/"

export const STORAGE_KEY = {
    refreshToken: "refresh_token",
    accessToken: "access_token"
}