import React from "react";
import "./Topfooter.css";

const Topfooter = () => {
  return (
    <section className="top-footer">
      <div className="row">
        <div className=" col-md-2 top-one">
          <h3>Order</h3>
        </div>
        <div className=" col-md-2 top-one">
          <h4>RECIPES EVERYDAY</h4>
        </div>
        <div className=" col-md-2 top-one">
          <h4>EAT</h4>
          <ul>
            <li>Menu</li>
            <li>Find a Nando's</li>
            <li>Products</li>
            <li>Recipes</li>
          </ul>
        </div>
        <div className=" col-md-2 top-one">
          <h4>EXPLORE</h4>
          <ul>
            <li>Our Brand Story</li>
            <li>
              The Story of
              <br /> PERi-PERi
            </li>
            <li>Arts</li>
          </ul>
        </div>
        <div className=" col-md-2 top-one">
          <h4> WORK</h4>
          <ul>
            <li>About Us</li>
            <li>Why Nando's</li>
          </ul>
        </div>
        <div className=" col-md-2 top-one">
          <h4> HELP </h4>
          <ul>
            <li>Nando's Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Topfooter;
