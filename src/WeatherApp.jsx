import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";




export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo]=useState({
        city:"Wonderland !!",
        feelslike:0,
        temp:0,
        tempmin:0,
        tempmax:0,
        humidity:0,
        weather:0,

    });

   let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
   }

    return(
     <div style={{textAlign:"center"}}>
        <h2>Weather APP ClimaVista </h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        <h4><b>Created By @Mahatva</b></h4>
     </div>
    );
}