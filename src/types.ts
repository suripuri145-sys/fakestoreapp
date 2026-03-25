export interface Product {
  id?: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image?: string;
}

export interface LoginResponse {
  token: string;
}

export interface LoginUser {
  username: string;
  password: string;
}