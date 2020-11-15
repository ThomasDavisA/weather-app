import React, { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import "./Panel.css";

class Panel extends React.Component {
  static contextType = WeatherContext;

  render() {
    if (this.context.loading) {
      return <p>Loading...</p>;
    }

    return (
      <>
        <div className="weather-panel">
          <div className="panel-local-high">
            <p>Current High: {this.context.main.temp_max || "0"}</p>
          </div>
          <div className="panel-local-current">
            <p>{this.context.weather.main || "0"}</p>
            <p>{this.context.weather.description || "0"}</p>
            <p>Currently: {this.context.main.temp || "0"} degrees</p>
            <p>(but feels like {this.context.main.feels_like || "0"})</p>
          </div>
          <div className="panel-local-low">
            <p>Current Low: {this.context.main.temp_min || "0"}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Panel;
