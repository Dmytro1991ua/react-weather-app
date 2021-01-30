import React from "react";
import { Form } from "./Form/Form";
import styles from "./SearchCity.module.css";

export const SearchCity = () => {
  return (
    <figure className={styles["app-header"]}>
      <img
        src={require("../../images/header-img.png").default}
        alt="weather app img"
        />
        <Form />
    </figure>
  );
};
