import React from "react";
import Navbar from "../components/Navbar";
import CartBanner from "../components/CartBanner";
import CartCards from "../components/CartCards";
import Footer from '../components/Footer';

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartBanner/>
      <CartCards />
       <Footer/>
    </div>
  );
};

export default Cart;
