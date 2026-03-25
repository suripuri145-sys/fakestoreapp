import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// Product API
export const getProducts = () => API.get("/products");
export const addProduct = (product) => API.post("/products", product);
export const deleteProduct = (id) => API.delete(`/products/${id}`);
export const updateProduct = (id, product) => API.put(`/products/${id}`, product);

// Auth API (FakeStoreAPI has /auth/login)
export const loginUser = (user) => API.post("/auth/login", user);

export default API;