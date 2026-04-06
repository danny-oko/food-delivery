// lib/api.ts
import axios from "axios";
import { clearBrowserCookie, getBrowserCookie } from "./cookie-utils";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://food.food-delivery-danny.workers.dev",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = getBrowserCookie("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      if (typeof window !== "undefined") {
        clearBrowserCookie("token");
        window.location.href = "/";
      }
    }

    console.error("API Error:", status, error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default api;
