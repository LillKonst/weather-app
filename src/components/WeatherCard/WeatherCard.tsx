import { useFetchWeather } from "../../hooks/useFetchWeather";

export default function WeatherCard() {
  const { weatherData, loading, error } = useFetchWeather("Oslo,norge");

  if (loading) return <p>Laster værdata...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="m-5">
      <h1>Været i {weatherData?.name}</h1>
      
      
   
      <div className="w-20 h-20 rounded-full bg-blue-500">
        <p>Beskrivelse: {weatherData?.weather[0].description}</p>
        <div className="flex">
          <p>Temperatur: {weatherData?.main.temp}°C</p>
          <div className="flex flex-col">
            <p>wind</p>
            <p>humidity</p>

          </div>
        </div>
      </div>
     </div>
  );
}
