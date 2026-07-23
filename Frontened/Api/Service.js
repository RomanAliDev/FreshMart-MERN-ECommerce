import axios from "axios";

const api = axios.create({
  baseURL: "https://freshmart-mern-ecommerce-production.up.railway.app/api",
});

export default api;
