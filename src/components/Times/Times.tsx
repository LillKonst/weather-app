import { useState } from "react";
import partClody from "../../images/part-cloudy.svg"

export default function Times () {
  const [activeTab, setActiveTab] = useState("time");

  return(
     <div className="flex flex-col items-center mt-5 w-full">
          <div className="flex gap-3 w-full">
            <button onClick={() =>setActiveTab("time")} className={`p-2 w-full rounded transition-all ${activeTab === "time" ? "bg-daysky" : "bg-transparent"}`}>KLOKKESLETT</button>
          
            <button onClick={() =>setActiveTab("date")} className={`p-2 w-full rounded transition-all ${activeTab === "date" ? "bg-daysky" : "bg-transparent"}`}>DATO</button>
          </div>
          <ul className="w-full">
            <li className="flex justify-between w-full border-2 border-daysky rounded p-1 my-2">15:00 <img src={partClody} alt="cloud and sun" className="w-8 h-8" /></li>
            <li className="flex justify-between w-full border-2 border-daysky rounded p-1 my-2">15:00 <img src={partClody} alt="cloud and sun" className="w-8 h-8" /></li>
            <li className="flex justify-between w-full border-2 border-daysky rounded p-1 my-2">15:00 <img src={partClody} alt="cloud and sun" className="w-8 h-8" /></li>
            <li className="flex justify-between w-full border-2 border-daysky rounded p-1 my-2">15:00 <img src={partClody} alt="cloud and sun" className="w-8 h-8" /></li>
            <li className="flex justify-between w-full border-2 border-daysky rounded p-1 my-2">15:00 <img src={partClody} alt="cloud and sun" className="w-8 h-8" /></li>
          </ul>
      </div>
  );
}