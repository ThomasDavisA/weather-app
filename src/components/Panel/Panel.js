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
            <h3>Current High: </h3>
            <h4>{this.context.main.temp_max || "100"}°F</h4>
          </div>
          <div className="panel-local-current">
            <h2>Currently, in {this.context.name || "anynowhere"}</h2>
            {/* <p>{this.context.weather.main || ""}</p> */}
            <img
              src={`http://openweathermap.org/img/wn/${this.context.weather.icon}@2x.png`}
              alt={this.context.weather.description}
            ></img>
            <h3>Currently: {this.context.main.temp || "70"}°F</h3>
            <p>(but feels like {this.context.main.feels_like || "80"}°F)</p>
          </div>
          <div className="panel-local-low">
            <h3>Current Low: </h3>
            <h4>{this.context.main.temp_min || "0"}°F</h4>
          </div>
        </div>
      </>
    );
  }
}

export default Panel;
