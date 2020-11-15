import React from "react";

const WeatherContext = React.createContext({
  weather: null,
  main: null,
  name: null,
  loading: null,
});
export default WeatherContext;

export class WeatherContextProvider extends React.Component {
  state = {
    weather: {},
    main: {},
    name: "",
    loading: false,
  };

  componentDidMount = () => {
    console.log("didmountcalled");
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Riverside&units=imperial&appid=62a55a68fbbb825f22e99d63184d3afe"
    )
      .then((res) => {
        return res.json();
      })
      .then((weather) => {
        console.log(weather);
        this.setState({
          weather: weather.weather,
          main: weather.main,
          name: weather.name,
          loading: true,
        });
      })
      .catch((error) => {
        return error.message;
      });
  };

  searchCity = (name) => {
    console.log("called searchCity");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=62a55a68fbbb825f22e99d63184d3afe`
    )
      .then((res) => {
        return res.json();
      })
      .then((weather) => {
        console.log("called weather city");
        this.setState({
          weather: weather.weather,
          main: weather.main,
          name: weather.name,
        });
      })
      .catch((error) => {
        return error.message;
      });
  };

  searchZip = (zip) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=62a55a68fbbb825f22e99d63184d3afe`
    )
      .then((res) => {
        return res.json();
      })
      .then((weather) => {
        console.log(weather);
        this.setState({
          weather: weather.weather,
          main: weather.main,
          name: weather.name,
        });
      })
      .catch((error) => {
        return error.message;
      });
  };

  render() {
    return (
      <WeatherContext.Provider
        value={{
          weather: this.state.weather,
          main: this.state.main,
          name: this.state.name,
          searchCity: this.searchCity,
          searchZip: this.searchZip,
        }}
      >
        {this.props.children}
      </WeatherContext.Provider>
    );
  }
}
