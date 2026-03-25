import React, { useState } from "react";
import { Product } from "../types";

interface AddProductProps {
  onAdd: (product: Product) => void;
}

const AddProduct: React.FC<AddProductProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: Product = { title, price };
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: { "Content-Type": "application/json" },
    });
    const data: Product = await res.json();
    onAdd(data);
    setTitle("");
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" type="number" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;