import React from 'react';
import './Monitoring.css';

function Monitoring() {
  return (
    <div className="Monitoring">
      <h2 className="Monitoring-text">
        Our remote monitoring service eliminates huge amounts of manual work and helps make sure everyone gets home safe.
      </h2>
      <h4 className="Monitoring-text">
        Smart sensoring helps you capture data faster and work with it more easily. And it helps keep workers safer in the field.
      </h4>
      <p className="Monitoring-response-container">
        <img src={require("./assets/monitoring/safety.png")} className="Monitoring-response-boxes" alt="safety"/>
        <img src={require("./assets/monitoring/speed.png")} className="Monitoring-response-boxes" alt="speed"/>
        <img src={require("./assets/monitoring/savings.png")} className="Monitoring-response-boxes" alt="savings"/>
      </p>
    </div>
  );
}

export default Monitoring;
