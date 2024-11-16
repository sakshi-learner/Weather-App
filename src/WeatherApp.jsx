import { useState } from "react";
import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function WeatherApp(){
    const [weatherInfo,  setWeatherInfo] = useState({
        city:"Jabalpur",
        feelsLike: 26.47,
        humidity: 44,
        temp: 26.47,
        tempMax: 26.47,
        tempMin: 26.47,
        weather: "haze",
    });

    let updateInfo =(newInfo)=>{
      setWeatherInfo(newInfo);
    };

    return(
        <>
        <h2  className="Nav"> Weather Widget &nbsp; <i>Search Weather by City </i> </h2>
        <div className="WeatherApp"> 
          <SearchBox updateInfo={updateInfo} />
          <InfoBox info={weatherInfo} /> 
        </div>
        <br></br>
        <br></br>
        <div className="footer">
           <p><InstagramIcon/> &nbsp; &nbsp;</p> 
           <p><FacebookIcon/>  &nbsp; &nbsp;</p>
           <p>< MailOutlineIcon/> &nbsp; &nbsp;</p> 
          </div>
        </>
    );

}

export default WeatherApp;