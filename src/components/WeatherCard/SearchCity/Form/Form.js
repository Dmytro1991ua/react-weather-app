import React from "react";
import styles from "./Form.module.css";

export const Form = ({ setCity, city, requestCity}) => {
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    requestCity();

    setCity("");
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles["input-box"]}>
        <input
          className={styles.input}
          id="city"
          type="text"
          placeholder="Enter Your City"
          onChange={handleChange}
          value={city}
          required
        />
        <label className={styles.label} htmlFor="city">
          Enter Your City
        </label>
      </div>
      <button className={styles.btn} type="submit">
        Let's Find Out
      </button>
    </form>
  );
};
