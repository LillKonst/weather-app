import { useState } from "react";
import { useFetchForecast } from "../../hooks/useFetchForecast";
import { ForecastItem } from "../../hooks/useFetchForecast";
import partClody from "../../images/part-cloudy.svg"

export default function Times () {
  const [activeTab, setActiveTab] = useState("time");
  const { forecastData, loading, error } = useFetchForecast("Oslo,norge");

  if (loading) return <p>Laster værdata...</p>;
  if (error || !forecastData) return <p>{error || "ingen data"}</p>;

  const timeItems = forecastData.list.slice(0,5);
  const dateMap = new Map<string, ForecastItem>();

  forecastData.list.forEach(item => {
    const date = item.dt_txt.split(" ")[0];
    if (!dateMap.has(date)) {
      dateMap.set(date, item);
    }
  });

  const dateItems = Array.from(dateMap.values());

  const visibleItems = activeTab === "time" ? timeItems : dateItems;


  return(
     <div className="flex flex-col items-center mt-5 w-full">
          <div className="flex gap-3 w-full">
            <button onClick={() =>setActiveTab("time")} className={`p-2 w-full rounded transition-all ${activeTab === "time" ? "bg-daysky" : "bg-transparent"}`}>KLOKKESLETT</button>
          
            <button onClick={() =>setActiveTab("date")} className={`p-2 w-full rounded transition-all ${activeTab === "date" ? "bg-daysky" : "bg-transparent"}`}>DATO</button>
          </div>
          <ul className="w-full">
            {visibleItems.map((item, i) => {
              const time = item.dt_txt.split(" ")[1].slice(0, 5);
              const date = item.dt_txt.split(" ")[0];
              const icon = item.weather[0].icon; 

              return(
                <li key={i} className="flex justify-between w-full border2 border-daysky rounded p-1 my-2 items-center">
                  <span>{activeTab === "time" ? time : date}</span>
                  <img 
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={item.weather[0].description}
                    className="w-8 h-8" 
                  />
                </li>
              );
            })}
            {/* <li className="flex justify-between w-full border-2 border-daysky rounded p-1 my-2">15:00 <img src={partClody} alt="cloud and sun" className="w-8 h-8" /></li> */}
            
          </ul>
      </div>
  );
}