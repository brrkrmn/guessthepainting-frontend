import axios from "axios";

export const backendService = axios.create({
  baseURL: process.env.BASE_URL
});