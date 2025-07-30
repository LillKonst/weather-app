import { useFetchWeather } from "../../hooks/useFetchWeather";
import partClody from "../../images/part-cloudy.svg"
export default function WeatherCard() {
  const { weatherData, loading, error } = useFetchWeather("Oslo,norge");

  if (loading) return <p>Laster værdata...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="m-5 bg-background">
      <h1>{weatherData?.name}</h1>
      <div className="flex justify-between">
        <h2>Tirsdag 29/7</h2>
        <h2>kl 12:00</h2>
      </div>
      
      
      
   
      <div className="p-3 w-96 h-96 rounded-full bg-linear-to-b from-10%  from-daysky via-50% to-65% to-transparent">
        <div className="p-3 flex flex-col items-center">
          <img src={partClody} alt="sun and clouds" className="p-2 mb-8" />
          <p className="text-2xl">{weatherData?.weather[0].description}</p>
        <div className="flex m-5 gap-5 justify-center items-center">
          <p className="text-3xl">{weatherData?.main.temp}°C</p>
          <div className="flex flex-col">
            <p>wind</p>
            <p>humidity</p>

          </div>
        </div>
        
        </div>
      </div>
     </div>
  );
}
