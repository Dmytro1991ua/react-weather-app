import React from "react";
import { SearchCity } from "./SearchCity/SearchCity";
import { WeatherData } from "./WeatherData/WeatherData";
import styles from "./Weather.module.css";

export const WeatherCard = () => {
  return (
    <section className={styles["weather-app"]}>
      <div className={styles.container}>
        <h1 className={styles.title}>Weather App</h1>
        <div className={styles["weather-body"]}>
          <SearchCity />
          <WeatherData />
        </div>
      </div>
    </section>
  );
};
