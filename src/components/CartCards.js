import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CartCards = () => {
  const cartdata = [
    {
      imgUrl: "./assets/images/cards_1.jpg",
      name: " Grey Oversized Urban Shirt for Men",
      type: "urban shirts",
      offerPrice: "1199",
      originalPrice: "2999",
      off: "60%",
    },
    {
      imgUrl: "./assets/images/cards_2.jpg",
      name: "Coffee Brown Cargo Pants for Men",
      type: "Cargo Pants",
      offerPrice: "1498",
      originalPrice: "3749",
      off: "62%",
    },
    {
      imgUrl: "./assets/images/cards_3.jpg",
      name: "Printed Oversized T-shirt for Men",
      type: "Oversized T-Shirts",
      offerPrice: "549",
      originalPrice: "1520",
      off: "64%",
    },
    {
      imgUrl: "./assets/images/cards_4.jpg",
      name: " Printed Oversized T-shirt for Men",
      type: "Oversized T-Shirts",
      offerPrice: "399",
      originalPrice: "1199",
      off: "67%",
    },
  ];
  return (
    <>
      {cartdata.map((item) => (
        <div className="container d-flex justify-content-center mt-2 text-start ">
          <div className="card mb-3 shadow" style={{ maxWidth: "655px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={item.imgUrl}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body cart">
                  <p className="fw-bold fs-4 m-0">{item.name}</p>
                  <p className="text-body-secondary m-0">{item.type}</p>
                  <div className="card-text fs-5 d-flex gap-2">
                    <span> ₹{item.offerPrice} </span>
                    <strike>₹{item.originalPrice}</strike> 
                    <span className="text-success fw-bold">
                      ({item.off} off)
                    </span>
                    
                  </div>
                  <small className="text-body-secondary">
                    Inclusive of All Taxes + Free Shipping
                  </small>
                  <p>Buy Any 2 & Get ₹250/- OFF (Code: first250)</p>
                  <p>COLOR :Light Grey</p>
                  <p>Size :M</p>
                  <div className="row g-0  mt-xxl-3">
                    <div className="col-6">
                      <button type="button" className="btn btn-success">
                        Order Now
                      </button>
                    </div>
                    <div className="col-6">
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
      ))}
    </>
  );
};

export default CartCards;
