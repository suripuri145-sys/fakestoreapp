import React, { useEffect, useState } from "react";
import type { Product } from "../types";
import EditProduct from "./EditProduct";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data: Product[] = await res.json();
    setProducts(data);
  };

  const handleDelete = async (id: number) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });
    setProducts(products.filter(p => p.id !== id));
  };

  const handleUpdate = (updatedProduct: Product) => {
    setProducts(products.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - ${p.price}
            <button onClick={() => setEditingProduct(p)}>Edit</button>
            <button onClick={() => handleDelete(p.id!)}>Delete</button>
          </li>
        ))}
      </ul>

      {editingProduct && (
        <EditProduct
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default ProductList;