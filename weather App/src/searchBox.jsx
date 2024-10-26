import {useState} from "react"
import "./searchbox.css"
import {TextField , Button} from "@mui/material";
const SearchBox = ()=>{

    let[city, setCity] = useState("");

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "6420b4f4d9542ebe173697785798d55a";

    let getWeatherInfo = async () =>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);

        let result = {
            City:city,
            feelsLike:jsonResponse.main.feels_like , 
            Humidity:jsonResponse.main.humidity,
            Temp:jsonResponse.main.temp,
            tempmin:jsonResponse.main.temp_min,
            tempmax:jsonResponse.main.temp_max,
            weather:jsonResponse.weather[0].description
        }
        console.log(result);

    }

    let handleChange = (e)=>{
        // console.log(e.target.value);
        setCity(e.target.value);
    }

    let handleSubmit = (e)=>{
        e.preventDefault();
        console.log(city);

        setCity("");
        getWeatherInfo();
    }

    return (
        <div className="searchbox">
         <h1> Searh for the weather</h1>
         <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="city" variant="outlined" value={city} onChange={handleChange}/>
            <br />
            <br />
            <Button variant="contained" type="submit">Search</Button>
         </form>

        </div>
    );
};
export default SearchBox;