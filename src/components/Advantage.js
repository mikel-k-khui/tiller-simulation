import React from 'react';
import './Advantage.css';

function Advantage() {
  return (
    <div className="Advantage">
      <div className="Advantage-background">
        <h2 className="Advantage-text">
          Why choose Advantage?
        </h2>
        <div className="Advantage-response-container">
          <div className="Advantage-image-text">
            <div className="Advantage-column-text">
              <h2>We offer turnkey solutions for consultants, drilling contractors and end users.</h2>
              <h4>Placholder</h4>
            </div>
            <img src={require("./assets/advantage/img-1.png")} alt="1" className="Advantage-image"/>
          </div>
          <div className="Advantage-image-text">
            <div className="Advantage-column-text">
              <h2>We're the exclusive Canadian distributor of Royal Eijkelkamp products.</h2>
              <h4>Placholder</h4>
            </div>
            <img src={require("./assets/advantage/img-2.png")} alt="2" className="Advantage-image"/>
          </div>
          <div className="Advantage-image-text">
            <div className="Advantage-column-text">
              <h2>We provide an unmatched customer experience.</h2>
              <h4>Placholder</h4>
            </div>
            <img src={require("./assets/advantage/img-3.png")} alt="3" className="Advantage-image"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
