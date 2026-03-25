import React, { useState } from "react";
import { Product } from "../types";

interface EditProductProps {
  product: Product;
  onClose: () => void;
  onUpdate: (updatedProduct: Product) => void;
}

const EditProduct: React.FC<EditProductProps> = ({ product, onClose, onUpdate }) => {
  const [title, setTitle] = useState<string>(product.title);
  const [price, setPrice] = useState<number>(product.price);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updated: Product = { ...product, title, price };
    await fetch(`https://fakestoreapi.com/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(updated),
      headers: { "Content-Type": "application/json" },
    });
    onUpdate(updated);
    onClose();
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h4>Edit Product</h4>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditProduct;