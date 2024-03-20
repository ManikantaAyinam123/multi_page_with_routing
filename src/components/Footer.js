import React from "react";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div className="bg-black mt-5">
      <footer className="py-4" id="Contact Us">
        <div className="container-fluid py-4">
          <div className="row ">
            <div className="col-lg-4 col-md-6">
              <p className="text-light fs-4 mb-1">
                <img
                  src="./assets/images/Untitled.jpeg"
                  alt="Bootstrap"
                  width="40"
                  height="40"
                />
                Men's<span className="fw-bold">fashion</span>
              </p>

              <p className="small  text-warning">
                © Copyrights. All rights reserved.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 g-2">
              <h5 className="mb-1 text-warning">Follow Us</h5>
              <a
                className="me-2"
                href="https://www.instagram.com/accounts/onetap/?next=%2F&hl=en"
                target="_blank"
              >
                <Icon icon="mdi:instagram" style={{ color: "#e41b1b" }} />
              </a>
              <a
                className="me-2"
                href="https://www.linkedin.com/in/manikanta-ayinam-5244aa228/"
                target="_blank"
              >
                <Icon icon="bi:linkedin" style={{ color: "#0077b5" }} />
              </a>
              <a className="me-2">
                <Icon icon="logos:whatsapp-icon" />
              </a>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className=" mb-1 text-warning">Quick links</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none h6 mb-4"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none h6 mb-4"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none h6 mb-4"
                  >
                    AboutUs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none h6 mb-4"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-warning mb-1">Newsletter</h5>
              <p className="small text-white">
                Subscribe to our Newsletter and Receive our latest designs
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control bg-light"
                    type="text"
                    placeholder="ENTER YOUR E-MAIL"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
