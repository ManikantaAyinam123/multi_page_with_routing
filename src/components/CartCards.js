import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CartCards = () => {
  return (
    <div className="container d-flex justify-content-center mt-2 text-start ">
      <div className="card mb-3" style={{ maxWidth: "700px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./assets/images/cards_1.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <p className=" fw-bold fs-4 ">
                Grey Oversized Urban Shirt for Men
              </p>
              <p className="text-body-secondary  ">Urban Shirts</p>
              <p className="card-text d-flex">
                <span> ₹ 1199 </span>
                <strike>₹ 2999</strike> (
                <span className="text-success fw-bold d-flex">60% off</span>)
              </p>

              <small className="text-body-secondary ">
                Inclusive of All Taxes + Free Shipping
              </small>
              <p className="">Buy Any 2 & Get ₹250/- OFF (Code: first250)</p>
              <p className=" ">COLOR :Light Grey</p>
              <p className="">Size :M</p>
              <div className="row g-0 mt-md-5 mt-xxl-0 ">
                <div className="col-6 ">
                  <button type="button" className="btn btn-outline-warning">
                    Order Now
                  </button>
                </div>
                <div className="col-6 ">
                  <button type="button" className="btn btn-danger">
                    Remove Cart <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
