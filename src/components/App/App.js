import logo from "../../logo.svg";
import WeatherContext, {
  WeatherContextProvider,
} from "../../context/WeatherContext";
import SearchBar from "../SearchBar/SearchBar";
import Panel from "../Panel/Panel";
import "./App.css";

const handleSubmit = (input) => {
  input.preventDefault();
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <WeatherContextProvider>
        <SearchBar></SearchBar>
        <Panel></Panel>
      </WeatherContextProvider>
    </div>
  );
}

export default App;
