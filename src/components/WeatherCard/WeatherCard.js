import React from "react";
import { SearchCity } from "./SearchCity/SearchCity";
import { WeatherData } from "./WeatherData/WeatherData";
import styles from "./WeatherCard.module.css";

export const WeatherCard = ({ setCity, city, weather, requestCity, isLoading, error}) => {
  return (
    <section className={styles["weather-app"]}>
      <div className={styles.container}>
        <h1 className={styles.title}>Weather App</h1>
        <div className={styles["weather-body"]}>
          <SearchCity
            requestCity={requestCity}
            setCity={setCity}
            city={city}
            error={error}
          />
          <WeatherData
            weather={weather}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </section>
  );
};
