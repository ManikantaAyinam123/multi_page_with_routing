import React from "react";
import Navbar from "../components/Navbar";
import AccountBanner from "../components/AccountBanner";
import AccountForm from "../components/AccountForm";
import Footer from "../components/Footer";

const Account = () => {
  return (
    <div>
      <Navbar />
      <AccountBanner />
      <AccountForm />
      <Footer/>
    </div>
  );
};

export default Account;
