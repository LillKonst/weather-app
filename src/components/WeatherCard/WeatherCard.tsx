import { useFetchWeather } from "../../hooks/useFetchWeather";

export default function WeatherCard() {
  const { weatherData, loading, error } = useFetchWeather("Oslo,norge");

  if (loading) return <p>Laster værdata...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="m-5">
      <h1>Været i {weatherData?.name}</h1>
      <p>Temperatur: {weatherData?.main.temp}°C</p>
      <p>Beskrivelse: {weatherData?.weather[0].description}</p>
    </div>
  );
}
