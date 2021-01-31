import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
import axios from "axios";

function App() {
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const requestCity = () => {
    axios
      .get(`${BASE_URL}?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      .then((weather) => {
        console.log(weather.data);
        setWeather(weather.data);
      });
  };

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <WeatherCard
          requestCity={requestCity}
          setCity={setCity}
          city={city}
          weather={weather}
        />
      </main>
    </div>
  );
}

export default App;
