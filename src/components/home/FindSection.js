import React from "react";
import "./FindSection.css";
const FindSection = () => {
  return (
    <div className="row eating-section">
      <div className="col-lg-6 eating">
        <span className="stright">
          <h1 className="heading">Eating at Nando's</h1>
          <p className="section-para">
            We’ve got a whole lot more up our sleeves than our legendary
            flame-grilled PERi-PERi chicken!
          </p>
          <button className="btn home-btn stright">Check Out over Menu</button>
        </span>
      </div>

      <div className="col-lg-6 find">
        <span className="stright">
          <h1 className="heading">Find a Nando's</h1>
          <p className="section-para">
            Want to get a Nando’s fix sharpish? Finding your nearest Nando’s is
            just a click away!
          </p>

          <div className="col-12 form-div stright">
            <h4>Search for a Nando's nearest to you.</h4>
            <div className="search">
              <input type="text" className="finding-section-form" />
            </div>
            <br />
            <span className="finding-link">
              <a href="#" className="text-white">
                View All Restaurants
              </a>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default FindSection;
