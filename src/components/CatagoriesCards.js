import React from "react";

const CatagoriesCards = (props) => {
  const ImagesData = props.image;
  return (
    <div className="col-12 col-md-9 mt-3">
      <div className="row row-cols-1  row-cols-md-2 row-cols-lg-3  row-cols-xl-4 g-2 ">
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

export default CatagoriesCards;
