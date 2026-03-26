import axios from "axios";
import type { Product, LoginUser, LoginResponse } from "./types";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Optional: Global error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);


export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await API.get<Product[]>("/products");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const addProduct = async (product: Product): Promise<Product> => {
  try {
    const res = await API.post<Product>("/products", product);
    return res.data;
  } catch (error) {
    throw new Error("Failed to add product");
  }
};

export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await API.delete(`/products/${id}`);
  } catch (error) {
    throw new Error("Failed to delete product");
  }
};

export const updateProduct = async (
  id: number,
  product: Product
): Promise<Product> => {
  try {
    const res = await API.put<Product>(`/products/${id}`, product);
    return res.data;
  } catch (error) {
    throw new Error("Failed to update product");
  }
};

// ======================
// 🔐 Auth API
// ======================

export const loginUser = async (
  user: LoginUser
): Promise<LoginResponse> => {
  try {
    const res = await API.post<LoginResponse>("/auth/login", user);

    // Save token (if API returns one)
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }

    return res.data;
  } catch (error) {
    throw new Error("Invalid username or password");
  }
};

export default API;