import React from "react";

import { CityWithWeatherForecast } from "../types";

interface RowProps {
  city: CityWithWeatherForecast;
}

const Row = ({ city }: RowProps) => {
  const {
    city: cityName,
    weatherForecast: {
      properties: { timeseries },
    },
  } = city;
  const firstTimeseries = timeseries[0];
  const {
    data: {
      instant: {
        details: { air_temperature, relative_humidity },
      },
    },
  } = firstTimeseries;

  return (
    <tr>
      <td>{cityName}</td>
      <td>{air_temperature}</td>
      <td>{relative_humidity}</td>
    </tr>
  );
};

export default Row;
