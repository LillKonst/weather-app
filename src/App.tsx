import './App.css'
import axios from "axios"
import { useEffect } from 'react';
import WeatherCard from "./components/WeatherCard/WeatherCard";



function App() {
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const baseUrl = import.meta.env.WEATHER_APP_BASEURL;
        const apiKey = import.meta.env.WEATHER_APP_API_KEY;
        const city = "Oslo,norge";
        const url= `$(baseUrl)?q=${city}&units=metric&appid=${apiKey}`;

        const response = await axios.get(url);
        console.log(response.data);
      } catch (error) {
        console.error("Feil ved henting av værdata", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <WeatherCard />
    </div>
  );
}

export default App
