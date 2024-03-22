import React from "react";

const AccountForm = () => {
  return (
    <div className="container mt-5 shadow  border p-5">
      <div className="awesome">
        <form className="row g-3">
          <h1>Get In Touch With Us</h1>
          <div className="col-md-6 ">
            <input
              type="name"
              className="form-control"
              placeholder="FirstName"
            />
          </div>
          <div className="col-md-6">
            <input className="form-control" placeholder="LastName" />
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Phone"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Message"
            />
          </div>

          <div className="col-12 mb-2  border border-0">
            <button
              type="button"
              className="p-2  btn btn-warning"
              style={{ backgroundColor: "#B76E79" }}
            >
              Jion the Fashion Revolution
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountForm;
