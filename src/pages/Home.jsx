import React, { useState } from "react";
import WeatherWidget from "../widgets/WeatherWidget";
import weatherBackgrounds from "../utils/weatherBackgrounds";
import '../widgets/home.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



export default function Home() {
    const [weather, setWeather] = useState(null)

    const description = weather?.current?.weather_descriptions?.[0];
    const background = weatherBackgrounds[description];


    return (
        <div className="home-content"
            style={{
                backgroundImage: description ? `url(/imgs/${background})` : "none",
                backgroundColor: description ? "transparent" : "#b0d4f1",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                position: "relative",
                margin: 0,
                padding: "2rem",
                transition: "background-image 0.6s ease-in-out, background-color 0.6s ease-in-out",
            }}
        >


            <h1 style={{ color: "black" }}>Current Weather</h1>


            <Card
                variant="outlined"
                sx={{
                    width: 350,
                    borderRadius: 4,
                    p: 2,
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255,255,255,0.35)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
                }}

            >
                <CardContent>
                    <WeatherWidget onWeatherChange={setWeather} />
                </CardContent>
            </Card>

        </div>
    );
}