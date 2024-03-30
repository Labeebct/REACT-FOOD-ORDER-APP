import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import axionsInstance from "./instance/axiosInstance";
import Layout from "./components/common/Layout";

import Home from "./pages/users/Home";
import Foodopen from "./pages/users/FoodOpen";
import Foods from "./pages/users/Foods";
import Orders from "./pages/users/Orders";
import Checkout from "./pages/users/Checkout";
import Login from "./pages/users/Login";
import ConfirmOtp from "./pages/users/ConfirmOtp";
import Signup from "./pages/users/Signup";
import ForgetPassword from "./pages/users/ForgetPassword";
import ResetPassword from "./pages/users/ResetPassword";
import NotFound from "./pages/common/NotFound";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminLayout from "./components/admin/Layout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminFood from "./pages/admin/Foods";
import AdminOrders from "./pages/admin/Orders";
import AdminUsers from "./pages/admin/Users";
import AddFood from "./pages/admin/AddFood";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/otp-verification/:verifyType/:email"
          element={<ConfirmOtp />}
        />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/view-food/:foodId" element={<Foodopen />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/foods" element={<AdminFood />} />
          <Route path="/admin/add-food" element={<AddFood />} />
          <Route path="/admin/edit-food/:foodId" element={<AddFood />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
