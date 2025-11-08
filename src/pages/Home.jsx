import React from "react";
import WeatherWidget from "../widgets/WeatherWidget";
import '../widgets/home.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



export default function Home() {


    const bgImage = "url('/imgs/overcast.jpg')"; // temp static background


    return (
        <div className="home-content"
            style={{
                backgroundImage: bgImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                position: "relative",
                margin: 0,
                padding: "2rem",
            }}
        >

   
            <h1 style={{ color: "#fff" }}>Current Weather</h1>


            <Card 
                variant="outlined" 
                sx={{ 
                    width: 350,
                    borderRadius: 4, 
                    boxShadow: 3, 
                    p: 2,
                    backgroundColor: "rgba(255,255,255,0.9)", }}
            
            >
                <CardContent>
                    <WeatherWidget />
                </CardContent>
            </Card>

        </div>
    );
}