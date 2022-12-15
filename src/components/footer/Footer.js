import React from "react";
import "./Footer.css";
import Topfooter from "./Topfooter";

const Footer = () => {
  return (
    <>
      <Topfooter />
      <div className="footer-empty"></div>
      <div className="footer">
        <h1 className="text-white footer-heading">
          Cookies might not be on our menu, but they are a great way for us to
          give you a fired up experience on our online services. Click Accept to
          agree to us using them.
        </h1>
        <button className="btn btn-link button">Accept</button>
        <button className="btn btn-link button text-decoration-underline">
          {" "}
          Find out more
        </button>
      </div>
    </>
  );
};

export default Footer;
