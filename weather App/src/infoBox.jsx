import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const InfoBox = (info)=>{
    
    let INIT_URL = "https://media.istockphoto.com/id/1284671318/photo/meadows-in-the-snow-peak-mountains-of-himalaya.webp?a=1&b=1&s=612x612&w=0&k=20&c=kpxpZAc4_N_ugModXTMJL-Sh5XGCiq-AuXN5WLMUXp8="
    return(
        <div style={{display:"flex" , justifyContent:"center"}}>
           
            <Card sx={{ maxWidth: 345 }} style={{marginTop:"30px", textAlign:"center"}}>
            <CardMedia
                sx={{ height: 140 }}
                image={INIT_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <h3>{info.city}</h3>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               Tempreture={info.temp} &deg;C
               <br />
               MinTemp={info.tempMin} &deg;C
               <br />
               MaxTemp={info.tempMax} &deg;C
               <br />
               <h3>Weather-{info.weather}</h3>
               The weather feelsLike is very happy {info.feelsLike} &deg;C

                </Typography>
            </CardContent>
            
            </Card>
    </div>
    );
};
export default InfoBox;