/* eslint-disable react/prop-types */
import { useCity } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CityList() {
  const { isLoading, cities } = useCity();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="add your city by clicking on the city on map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
