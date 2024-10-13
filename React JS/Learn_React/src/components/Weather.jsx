import React from "react";

const Weather = ({ temperature }) => {
  if (temperature < 15) {
    return <h3>Its cold outside</h3>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <h3>Its nice outside</h3>;
  }
  return <h3>Its hot outside</h3>;
};

export default Weather;
