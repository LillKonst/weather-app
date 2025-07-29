import { useEffect, useState } from "react";
import axios from "axios";

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  name: string;
}

export const useFetchWeather = (city: string = "Oslo,norge") => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

   useEffect(() => {
    const fetchWeather = async () => {
      try {
        const baseUrl = import.meta.env.VITE_WEATHER_APP_BASEURL;
        const apiKey = import.meta.env.VITE_WEATHER_APP_API_KEY;
        // const city = "Oslo,norge";
        const url= `${baseUrl}?q=${city}&units=metric&appid=${apiKey}`;

        const response = await axios.get<WeatherData>(url);
        setWeatherData(response.data);
      } catch (err) {
        setError("Feil ved henting av værdata");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weatherData, loading, error };
};