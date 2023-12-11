import axios from "axios";

export const baseAppURL = "http://localhost:3000/";
export const AXIOS = axios.create({
  baseURL: baseAppURL,
  timeout:20000
});