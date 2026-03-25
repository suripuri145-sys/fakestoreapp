import axios from "axios";
import { Product, LoginUser, LoginResponse } from "./types";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// Products
export const getProducts = () => API.get<Product[]>("/products");
export const addProduct = (product: Product) => API.post<Product>("/products", product);
export const deleteProduct = (id: number) => API.delete(`/products/${id}`);
export const updateProduct = (id: number, product: Product) => API.put<Product>(`/products/${id}`, product);

// Auth
export const loginUser = (user: LoginUser) => API.post<LoginResponse>("/auth/login", user);

export default API;