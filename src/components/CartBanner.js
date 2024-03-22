import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CartBanner = () => {
  return (
    // <div className="container">
    //   <video controls autoPlay muted width="100%" height="auto">
    //     <source
    //       src="./assets/images/vecteezy_mobile-phone-smartphone-with-blue-stage-podium-cart-goods_9741084.mp4"
    //       type="video/mp4"
    //     />
    //   </video>
    // </div>
    <div>
      <div className="container-fluid bg-black shadow">
        <img src="./assets/images/cartbanner.jpg" className="img-fluid"></img>
      </div>
    </div>
  );
};

export default CartBanner;
