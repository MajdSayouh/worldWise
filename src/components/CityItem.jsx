/* eslint-disable react/prop-types */
// import React from "react";
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCity } from "../contexts/CitiesContext";
import { useAuth } from "../contexts/FakeAuthContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  console.log(city);
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useCity();
  console.log(currentCity);

  async function handleClick(e) {
    e.preventDefault();
    await deleteCity(id);
  }

  const { user } = useAuth();
  console.log(user);
  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
