import { useState } from "react";
import styles from "./App.module.css";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
import axios from "axios";

function App() {
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // const requestCity = () => {
  //   axios
  //     .get(`${BASE_URL}?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
  //     .then((weather) => {
  //       console.log(weather.data.coord);
  //       setWeather(weather.data);
  //     });
  // };

  const requestCity = async () => {
    const apiUrl = `${BASE_URL}?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
    setError(false);
    try {
      setIsLoading(true); // clearing the error before attempt fetching again.
      const response = await axios.get(apiUrl);
      setWeather(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  //requestCity={requestCity}
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <WeatherCard
          setCity={setCity}
          city={city}
          weather={weather}
          requestCity={requestCity}
          isLoading={isLoading}
          error={error}
        />
      </main>
    </div>
  );
}

export default App;
