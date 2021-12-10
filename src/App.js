import React from "react";
import Login from "./Component/Vews/Auth/login";
import Register from "./Component/Vews/Auth/Register";
import Product from "./Products/Product";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProductDetails from "./Products/productdetails";
function App() {
  return (
    <div className="App">
      <Router>
        <ul id="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/create" element={<ProductForm />} />
          <Route path="/product/edit/:id" element={<ProductForm />} />
          <Route path="/product/details/:id" element={<ProductDetails />} />
          <Route path="/" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
