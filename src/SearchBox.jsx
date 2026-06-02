import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`,
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      return {
        city: data.location.name,
        country: data.location.country,
        region: data.location.region,
        temp: data.current.temp_c,
        feelsLike: data.current.feelslike_c,
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        lastUpdated: data.current.last_updated,
      };
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await getWeatherInfo();

    if (result) {
      updateInfo(result);
      setError("");
    }

    setCity("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
