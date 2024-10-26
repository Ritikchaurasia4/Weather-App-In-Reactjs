import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./searchBox";

const Weather = ()=>{
    let[weatherInfo , setWeatherInfo] = useState({
        city:"Pune",
        weather : "haze" ,
        temp : 20.7,
        tempMin : 20,
        tempMax : 27,
        humidity : 23,
        feelslike : 20,
    })
    return (
        <div>
            <SearchBox/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
};
export default Weather;