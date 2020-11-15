import React from "react";
import WeatherContext from "../../context/WeatherContext";
import "./SearchBar.css";

class SearchBar extends React.Component {
  static contextType = WeatherContext;

  state = {
    searchValue: "",
    searchType: "city",
  };

  handleChange = (e) => {
    this.setState({
      searchType: e.target.value,
    });
  };

  searchSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchType === "zip") {
      this.context.searchZip(this.state.searchValue);
    } else {
      this.context.searchCity(this.state.searchValue);
    }
  };

  setName = (value) => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <>
        <form className="search-bar" onSubmit={(e) => this.searchSubmit(e)}>
          <div className="radio-box">
            <div>
              <input
                type="radio"
                value="zip"
                name="searchType"
                className="zip-search"
                onChange={this.handleChange}
                checked={this.state.searchType === "zip"}
              />
              <label htmlFor="zip-search">Zip</label>
            </div>
            <div>
              <input
                type="radio"
                value="city"
                name="searchType"
                className="city-search"
                onChange={this.handleChange}
                checked={this.state.searchType === "city"}
              />
              <label htmlFor="city-search">City</label>
            </div>
          </div>
          <input
            type="text"
            name="input"
            value={this.state.searchValue}
            onChange={(e) => this.setName(e.target.value)}
            className="search-input"
          ></input>
          <button className="search-submit" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default SearchBar;
