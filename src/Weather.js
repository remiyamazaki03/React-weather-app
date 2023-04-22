import React, { useState } from "react";
import axios from "axios";
import Information from "./Information";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [information, setInformation] = useState(null);

  function handleSubmit(event) {
    function showTemperature(response) {
      let information = {
        temperature: Math.round(response.data.temperature.current),
        description: response.data.condition.description,
        humidity: Math.round(response.data.temperature.current),
        wind: response.data.wind.speed,
        icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      };
      setInformation(information);
    }

    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=8a32636a9f2a4b34c0df70a3a3to1b99`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <Information information={information} />
    </div>
  );
}
