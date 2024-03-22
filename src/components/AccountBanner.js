import React from "react";
import { Icon } from "@iconify/react";
const AccountBanner = () => {
  return (
    <div
      className="container-fluid shadow w-100% h-auto p-5"
      style={{ backgroundColor: "#B76E79" }}
    >
      <h1 className="mb-4">Stay connected with us!</h1>
      <div className="d-flex justify-content-center gap-3">
        <Icon
          icon="skill-icons:instagram"
          style={{ width: "40px", height: "40px" }}
        />
        <Icon
          icon="logos:whatsapp-icon"
          style={{ width: "40px", height: "40px" }}
        />
        <Icon
          icon="skill-icons:twitter"
          style={{ width: "40px", height: "40px" }}
        />
        <Icon icon="logos:facebook" style={{ width: "40px", height: "40px" }} />
      </div>
    </div>
  );
};

export default AccountBanner;
