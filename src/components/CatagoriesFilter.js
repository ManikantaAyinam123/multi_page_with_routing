import React from "react";
import { Icon } from "@iconify/react";

const CatagoriesFilter = () => {
  return (
    <div className="col-12 col-md-3 col-sm-1  side-content sticky-component mt-3 ">
      <div className="">
        <div className="border d-flex mb-3 bg-light">
          <p className="p-2 mb-0 ms-4">
            <span className="small">Sort by :</span>
            <span className="text-black">New Arrivals</span>
            <Icon
              className="ms-3"
              icon="ph:caret-down-bold"
              style={{ marginLeft: "0px" }}
            />
          </p>
        </div>
        <div className="border bg-light">
          <p className="p-2 mb-0 border-bottom">Shirts </p>

          <p className="p-2 mb-0 border-bottom">Hoodies </p>

          <p className="p-2 mb-0 border-bottom">Cargos </p>
          <p className="p-2 mb-0 border-bottom">Oversized T-Shirts </p>

          <p className="p-2 mb-0 border-bottom">Tracks </p>

          <p className="p-2 mb-0 border-bottom">Chinos </p>
          <p className="p-2 mb-0 border-bottom">Jeans </p>
          <p className="p-2 mb-0 border-bottom">Kurtas </p>
          <p className="p-2 mb-0 border-bottom">Sport Wear </p>
        </div>
        {/* Add more filters as needed */}
      </div>
    </div>
  );
};

export default CatagoriesFilter;
