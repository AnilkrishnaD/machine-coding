import React from "react";
import { useState } from "react";
import { countriesList } from "../data/countries";

const CountrySelector = () => {
  const [country, setCountry] = useState(countriesList[0].name);

  const [cities, setCities] = useState([]);

  const onChnageCountry = (e) => {
    console.log(e.target.value);

    const newCities = countriesList.filter(
      ({ name, value, cities }, index, item) => value === e.target.value
    )[0].cities;
    console.log(newCities);
    setCities(newCities);
  };
  // return jsx
  return (
    <div>
      <h1>Country selector</h1>

      <select onChange={onChnageCountry} style={{ padding: "12px" }}>
        {countriesList.map((item, index) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <select style={{ padding: "12px" }}>
        {cities.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
