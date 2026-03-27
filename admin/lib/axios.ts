import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787",
  headers: {
    Authorization: process.env.JWT_SECRET,
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor — handle errors globally
api.interceptors.response.use(
  (response) => {
    // console.log("======3=====");

    return response;
  },
  (error) => {
    console.error(
      "API Error:",
      error.response?.status,
      error.response?.data || error,
    );
    return Promise.reject(error);
  },
);

export default api;
