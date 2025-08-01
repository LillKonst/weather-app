import { useEffect, useState } from "react";
import axios from "axios";

interface ForecastItem {
  dt_txt: string; 
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface ForecastData {
  city: {
    name: string;
    country: string;
  };
  list: ForecastItem[];
}

export const useFetchForecast = (city: string = "Oslo,norge") => {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";
        const apiKey = import.meta.env.VITE_WEATHER_APP_API_KEY;
        const url = `${baseUrl}?q=${city}&units=metric&lang=no&appid=${apiKey}`;

        const response = await axios.get<ForecastData>(url);
        setForecastData(response.data);
      } catch (err) {
        setError("Feil ved henting av værmelding");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  return { forecastData, loading, error };
};