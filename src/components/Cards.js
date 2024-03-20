import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Cards = (props) => {
  const ImagesData = props.image;
  return (
    <div className="container">
      <h2
        className="d-flex justify-content-start align-items-center text-warning  mt-5"
        style={{ borderLeft: "5px solid black", padding: "0px 0px 0px 10px" }}
      >
        Trending Zone
      </h2>

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2 mt-0">
        {ImagesData?.map((item, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img src={item.imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Pitch Light Grey Oversized Urban Shirt for Men
                </h5>
                <p className="card-text me-0">
                  <i>₹ 1199 </i>
                  <strike>₹ 2999</strike>(
                  <span className="text-success fw-bold">60% off</span>)
                </p>
                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
