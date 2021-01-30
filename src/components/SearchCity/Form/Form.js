import React from "react";
import styles from "./Form.module.css";

export const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles["input-box"]}>
        <input
          className={styles.input}
          id="city"
          type="text"
          placeholder="Enter Your City"
        />
        <label className={styles.label} htmlFor="city">
          Enter Your City
        </label>
      </div>
      <button className={styles.btn}>Let's Find Out</button>
    </form>
  );
};
