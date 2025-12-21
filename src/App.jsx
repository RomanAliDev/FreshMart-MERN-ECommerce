import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/:categoryName" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
