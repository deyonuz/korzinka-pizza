import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart";
import Login from "./pages/Login"
import ProtectedRoute from "./pages/ProtectedRoute"



const app = () => {

  return (
    <>
      <div className="container">
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Cart />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/ProtectedRoute" element={<ProtectedRoute/>}/>
          </Routes>
        </main>
      </div>
    </>
  );
};

export default app;
