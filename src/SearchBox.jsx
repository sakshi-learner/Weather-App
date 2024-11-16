import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
function SearchBox({ updateInfo }){

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL ="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY ="1fb1516c99252caf394ceacb3082700d";

    let getWeatherInfo = async ()=>{
      try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        
        let result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          FeelsLike:jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
      }catch(err){
        throw err;
      }
     
    };


    let handleChange = (event)=>{
      setCity(event.target.value);
    };

    let handleSubmit = async (event)=>{
      try{
        event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo= await getWeatherInfo();
       updateInfo(newInfo);
      }catch(err){
        setError(true);
      }
     
    };

    return(
        <>
        <div className='SearchBox'>
        
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="city Name" variant="outlined" required value={city} onChange={handleChange} />
            <br></br>
            <br></br>
            <Button variant="contained" type='submit'>search</Button>
            {error && <p style={{color:  "red"}}> <b> No such Place exists !</b></p>}
            </form>
        </div>
        </>
    );
}

export default SearchBox;