import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import AllProduct from "../product/allproduct";
import ProductDetail from "../product/productDetail";
import ContentsBlog from "../contentsBlog/contentsBlog";
import Location from "../home/location/Location";
import Carts from "../Cart/Carts";
import { ToastContainer } from "react-toastify";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import UserProfile from "../User/User";
import Checkout from "../Checkout/checkout";
import Headergiohang from "../Headergiohang/headergiohang";
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Headergiohang/>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogdetail/:id" element={<ContentsBlog />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/productdetail/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/:id" element={<AllProduct />} />
          <Route path="/userinfo" element={<UserProfile />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Location />
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
