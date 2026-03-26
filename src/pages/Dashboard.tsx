import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";
import type { Product } from "../types";

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
        <Route path="add-product" element={<AddProduct onAdd={function (product: Product): void {
          throw new Error("Function not implemented.");
        } } />} />
        <Route path="products" element={<ProductList />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default Dashboard;