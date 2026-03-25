import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <nav>
        <h2>FakeStore Dashboard</h2>
        <Link to="add-product">Add Product</Link>
        <Link to="products">Product List</Link>
        <button onClick={logout}>Logout</button>
      </nav>
      <Routes>
        <Route path="add-product" element={<AddProduct />} />
        <Route path="products" element={<ProductList />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default Dashboard;