
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import AirIcon from '@mui/icons-material/Air';


export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHl8ZW58MHx8MHx8fDA%3D"
    const HOT_URL="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhPVCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D"
    const COLD_URL="https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENPTEQlMjBXRUFUSEVSfGVufDB8fDB8fHww"
    const RAIN_URL="https://images.unsplash.com/photo-1603262439120-3e17d13bab3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fFJBSU4lMjBXRUFUSEVSfGVufDB8fDB8fHww"
    const BGSUNNY_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D"
    const BGCOLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D"
    const BGRAIN_URL="https://images.unsplash.com/photo-1688488615397-726ae4a5c755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFJBSU4lMjBXRUFUSEVSfGVufDB8fDB8fHww"
     
    useEffect(() => {
    let bgImage = INIT_URL;

    if (info.humidity > 80) {
      bgImage = BGRAIN_URL;
    } else if (info.temp > 15) {
      bgImage = BGSUNNY_URL;
    } else {
      bgImage = BGCOLD_URL;
    }

    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.transition = "background-image 0.5s ease-in-out";
  }, [info]); // runs when weather info changes

   



    return(
        <div className="InfoBox">
           <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
           ? RAIN_URL
           : info.temp>15
           ? HOT_URL
           : COLD_URL
          }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity>80
           ? <ThunderstormIcon/>
           : info.temp>15
           ? <SunnyIcon/>
           : <AcUnitIcon/>
          }
        </Typography>
        <Typography 
        variant="body2"  
        color= "text.secondary"
        component={"span"}
        >
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempmin}&deg;C</p>
          <p>Max Temp={info.tempmax}&deg;C</p>
          <p>
            The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
          </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}