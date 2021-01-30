import React from "react";
import styles from "./WeatherData.module.css";

export const WeatherData = () => {
  return (
    <div className={styles["app-bottom"]}>
      <div className={styles["app-body"]}>
        <p className={styles.heading}>
          Kiev,
          <span className={styles["heading-country"]}>UA</span>
        </p>
        <div className={styles.row}>
          <span className={styles.temperature}>-5°C</span>
          <div className={styles["temperature-details"]}>
            <span className={styles["weather-condition"]}>Ligth snow</span>
            <span className={styles["temperature-max"]}>-5°C</span>
            <span className={styles["temperature-min"]}>-5°C</span>
          </div>
        </div>
        <div className={styles.row}>
          <figure className={styles["icon-box"]}>
            <img className={styles.icon} src="" alt="weather icon" />
          </figure>
        </div>
        <div className={styles.row}>
          <div className={styles["temperature-additional"]}>
            <div className={styles["temperature-additional-box"]}>
              <span className={styles["temperature-feeling"]}>-10°C</span>
              <p className={styles["temperature-additional-title"]}>Feels Like</p>
            </div>
            <div className={styles["temperature-additional-box"]}>
              <span className={styles["temperature-feeling"]}>50%</span>
              <p className={styles["temperature-additional-title"]}>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
