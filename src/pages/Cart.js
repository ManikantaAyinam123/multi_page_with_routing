import React from "react";
import Navbar from "../components/Navbar";
import CartBanner from "../components/CartBanner";
import CartCards from "../components/CartCards";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartBanner/>
      <CartCards />
      <div className="mt-5">
        <h2 className="mt-5">This is cart page</h2>
      </div>
    </div>
  );
};

export default Cart;
