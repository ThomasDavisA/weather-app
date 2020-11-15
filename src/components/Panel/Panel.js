import React from "react";
import "./Panel.css";

const Panel = () => {
  return (
    <div className="weather-panel">
      <div className="panel-local-high">
        <p>High: </p>
      </div>
      <div className="panel-local-current">
        <p>Currently: 70 degrees</p>
        <p>(but feels like 80)</p>
      </div>
      <div className="panel-local-low">
        <p>Low: </p>
      </div>
    </div>
  );
};

export default Panel;
