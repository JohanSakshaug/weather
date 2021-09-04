export interface City {
  city: string;
  lat: number;
  lng: number;
}

interface Timeseries {
  data: {
    instant: {
      details: {
        air_pressure_at_sea_level: number;
        air_temperature: number;
        cloud_area_fraction: number;
        relative_humidity: number;
        wind_from_direction: number;
        wind_speed: number;
      };
    };
  };
}

export type WeatherForecast = {
  properties: {
    timeseries: Timeseries[];
  };
};

export interface CityWithWeatherForecast extends City {
  weatherForecast: WeatherForecast;
}
