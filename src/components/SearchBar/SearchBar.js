import React from "react";
import "./SearchBar.css";

function handleSubmit(input) {}

const SearchBar = () => {
  return (
    <form className="search-bar" onSubmit={(search) => handleSubmit(search)}>
      <textarea name="input" className="search-input"></textarea>
      <button name="search-submit" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
