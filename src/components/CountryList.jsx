/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCity } from "../contexts/CitiesContext";

function CountryList() {
  const { isLoading, cities } = useCity();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="add your city by clicking on the city on map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country, idx) => (
        <CountryItem key={idx} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
