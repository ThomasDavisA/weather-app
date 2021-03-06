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
    loading: true,
  };

  componentDidMount = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Riverside&units=imperial&appid=62a55a68fbbb825f22e99d63184d3afe"
    )
      .then((res) => {
        return res.json();
      })
      .then((weather) => {
        this.setState({
          weather: weather.weather[0],
          main: weather.main,
          name: weather.name,
          loading: false,
        });
      })
      .catch((error) => {
        return error.message;
      });
  };

  searchCity = (name) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=62a55a68fbbb825f22e99d63184d3afe`
    )
      .then((res) => {
        return res.json();
      })
      .then((weather) => {
        this.setState({
          weather: weather.weather[0],
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
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=62a55a68fbbb825f22e99d63184d3afe`
    )
      .then((res) => {
        return res.json();
      })
      .then((weather) => {
        this.setState({
          weather: weather.weather[0],
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
