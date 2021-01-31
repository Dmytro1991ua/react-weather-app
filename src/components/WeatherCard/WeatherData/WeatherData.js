import React from "react";
import styles from "./WeatherData.module.css";

export const WeatherData = ({ weather }) => {
  const kelvinToCelcious = (kelvin) => {
    return Math.round(kelvin - 273, 15);
  };

  return (
    <div className={styles["app-bottom"]}>
      {typeof weather.main !== "undefined" ? (
        <>
          <div className={styles["app-body"]}>
            <p className={styles.heading}>
              {weather.name},
              <span className={styles["heading-country"]}>
                {weather.sys.country}
              </span>
            </p>
            <div className={styles.row}>
              <span className={styles.temperature}>
                {kelvinToCelcious(weather.main.temp)}°C
              </span>
              <div className={styles["temperature-details"]}>
                <span className={styles["weather-condition"]}>
                  {weather.weather[0].description}
                </span>
                <span className={styles["temperature-max"]}>
                  {kelvinToCelcious(weather.main.temp_max)}°C
                </span>
                <span className={styles["temperature-min"]}>
                  {kelvinToCelcious(weather.main.temp_min)}°C
                </span>
              </div>
            </div>
            <div className={styles.row}>
              <figure className={styles["icon-box"]}>
                <img
                  className={styles.icon}
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </figure>
            </div>
            <div className={styles.row}>
              <div className={styles["temperature-additional"]}>
                <div className={styles["temperature-additional-box"]}>
                  <span className={styles["temperature-feeling"]}>
                    {kelvinToCelcious(weather.main.feels_like)}°C
                  </span>
                  <p className={styles["temperature-additional-title"]}>
                    Feels Like
                  </p>
                </div>
                <div className={styles["temperature-additional-box"]}>
                  <span className={styles["temperature-feeling"]}>
                    {weather.main.humidity}%
                  </span>
                  <p className={styles["temperature-additional-title"]}>
                    Humidity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
