import React from 'react';
import './Monitoring.css';

function Monitoring() {
  return (
    <div className="Monitoring">
      <h1 className="Monitoring-text">
        Our remote monitoring service delivers efficiencies for your business.
      </h1>
      <h5 className="Monitoring-text">
        Smart sensoring helps you capture data faster and work with it more easily. And it helps keep workers safer in the field.
      </h5>
      <a className="Monitoring-text" href="url">Learn More ></a>
      <p className="Monitoring-response-container">
        <img src={require("./assets/monitoring/safety.png")} className="Monitoring-response-boxes" alt="safety"/>
        <img src={require("./assets/monitoring/speed.png")} className="Monitoring-response-boxes" alt="speed"/>
        <img src={require("./assets/monitoring/savings.png")} className="Monitoring-response-boxes" alt="savings"/>
      </p>
    </div>
  );
}

export default Monitoring;
