import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./App.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <div className="app">
      <h1>🌦 Weather Dashboard</h1>

      <SearchBox updateInfo={setWeatherInfo} />

      {weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  );
}

export default App;
