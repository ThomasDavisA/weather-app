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
      console.log("called zip");
      this.context.searchZip(this.state.searchValue);
    } else {
      console.log("called city");
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
          <input
            type="radio"
            value="zip"
            name="searchType"
            className="zip-search"
            onChange={this.handleChange}
            checked={this.state.searchType === "zip"}
          />
          <label htmlFor="zip-search">Zip</label>
          <input
            type="radio"
            value="city"
            name="searchType"
            className="city-search"
            onChange={this.handleChange}
            checked={this.state.searchType === "city"}
          />
          <label htmlFor="city-search">City</label>
          <input
            type="text"
            name="input"
            value={this.state.searchValue}
            onChange={(e) => this.setName(e.target.value)}
            className="search-input"
          ></input>
          <button name="search-submit" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default SearchBar;
