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
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allproduct" component={AllProduct} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/tintuc1" component={ContentsBlog} />
          <Route exact path="/productdetail/:id" component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
