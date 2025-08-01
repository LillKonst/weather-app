import { useFetchWeather } from "../../hooks/useFetchWeather";
import partClody from "../../images/part-cloudy.svg"
import Times from "../Times/Times";

export default function WeatherCard() {
  const { weatherData, loading, error } = useFetchWeather("Oslo,norge");

  if (loading) return <p>Laster værdata...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className=" w-full p-2">
      <h1 className="text-3xl">{weatherData?.name}</h1>
      <div className="flex justify-between">
        <h2 className="text-xl">Tirsdag 29/7</h2>
        <h2 className="text-xl">kl 12:00</h2>
      </div>
      
      <div className="flex flex-col gap-2 items-center">
   
      <div className="p-3 w-80 h-80 rounded-full bg-linear-to-b from-10%  from-daysky via-50% to-65% to-transparent">
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
        <Times />
      </div>
     </div>
  );
}
