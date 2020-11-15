import { WeatherContextProvider } from "../../context/WeatherContext";
import SearchBar from "../SearchBar/SearchBar";
import Panel from "../Panel/Panel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="weather-title">
        <h1>What's the Weather?</h1>
      </div>
      <WeatherContextProvider>
        <SearchBar></SearchBar>
        <Panel></Panel>
      </WeatherContextProvider>
    </div>
  );
}

export default App;
