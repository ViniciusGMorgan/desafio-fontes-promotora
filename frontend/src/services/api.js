import axios from "axios";
import { Auth } from "../config/storage";

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem(Auth)
    ? JSON.parse(sessionStorage.getItem(Auth)).token
    : "";
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...config, headers };
});

export default api;
