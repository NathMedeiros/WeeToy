import axios from "axios";

export const api = axios.create({
  baseURL: "https://weetoys.onrender.com",
  timeout: 7000,
});
