import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
function InfoBox({info}){

    const HOT_URL = "https://png.pngtree.com/thumb_back/fh260/background/20230614/pngtree-sun-in-a-field-on-a-sunny-day-image_2939609.jpg";
    const COLD_URL = "https://img.freepik.com/premium-photo/frostcovered-rosehip-bush-with-red-berries-winter-sunny-weather_199743-25780.jpg?semt=ais_hybrid";
    const RAIN_URL = "https://as1.ftcdn.net/v2/jpg/10/02/14/40/1000_F_1002144066_6ejlxWqsKXRbi22qFLDNFxGVaOfLKHTv.jpg";

    return(
        <>
       <div className="InfoBox">
       
        <div className="CardContainer">
        <Card sx={{ maxWidth: 345 }} >  
        <CardMedia
        component="img"
        height="140"
        image={
          info.humidity > 80 
          ? RAIN_URL
          : info.temp > 15 
          ?  HOT_URL
          : COLD_URL
        }
        />
        <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
         {
          info.humidity > 80 
          ? <ThunderstormIcon style={{color:"#7eaee7"}}/>
          : info.temp > 15 
          ? <WbSunnyIcon style={{color:"#d27519"}} />
          : <AcUnitIcon style={{color:"#7eaee7"}}/>
         }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <b> <p>Temperature ={info.temp}&deg;C</p></b>
          <p>Humidity ={info.humidity}% </p>
          <p> Minimum Temperature ={info.tempMin}&deg;C </p>
          <p>Maximum Temperature ={info.tempMax}&deg;C </p>
          <p><i> the weather can be describe as<b> {info.weather}</b> and Feels Like ={info.feelsLike}&deg;C </i></p>
        </Typography>
        
        </CardContent>
        </Card>
        </div>
       </div>
        </>
    );
}

export default InfoBox;