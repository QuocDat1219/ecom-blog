import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blogdetail/:id" component={ContentsBlog} />
          <Route exact path="/productdetail/:id" component={ProductDetail} />
          <Route exact path="/productdetail/" component={Home} />
          <Route exact path="/cart" component={Carts} />
          <Route exact path="/:id" component={AllProduct} />
        </Switch>
        <Location />
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
