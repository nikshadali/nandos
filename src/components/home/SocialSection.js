import React from "react";
import "./SocialSection.css";
const SocialSection = () => {
  return (
    <section className="social-section">
      <div className="row">
        <div className="col-md-4 ">
          <p className="social-section-phara">
            <a href="#">NandosPakistan</a>
            <a href="#"> -3 weeks ago</a>
          </p>
          <p className="social-section-phara">
            Try our newest Cabo Sosatie - A traditional
            <br />
            kebab with a Nando's Twist! <a href="#">#New </a>
            <a href="#">#Cabo </a>
            <br />
            <a href="#">#Sosaties </a> <a href="#"> #NandosPK </a>
          </p>
        </div>
        <div className="col-md-4 ">
          <p className="social-section-phara">
            <a href="#">NandosPakistan</a>
            <a href="#"> -3 weeks ago</a>
          </p>
          <p className="social-section-phara">
            The world is coming down, the flags are up!
            <br />
            <a href="#">#T20WorldCupFinal </a> <a href="#">#Pakistan </a>
            <a href="#">#England</a>
            <br />
            <a href="#">#NandosPK</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
