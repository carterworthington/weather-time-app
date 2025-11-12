import { useState } from "react";
import WeatherWidget from "../widgets/WeatherWidget";
import weatherBackgrounds from "../utils/weatherBackgrounds";
import '../widgets/home.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from "../widgets/Navbar";



export default function Home() {
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState("Edmonton");

    const description = weather?.current?.weather_descriptions?.[0];
    const background = weatherBackgrounds[description];



    return (
        <>
        <Navbar onCityChange={setCity} />


            <div className="home-content"
                style={{
                    backgroundImage: description ? `url(/imgs/${background})` : "none",
                    backgroundColor: description ? "transparent" : "#b0d4f1",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                    position: "relative",
                    margin: 0,
                    
                    transition: "background-image 0.6s ease-in-out, background-color 0.6s ease-in-out",
                }}
            >
               




                <Card
                    variant="outlined"
                    sx={{
                        margin: "auto",
                        borderRadius: 4,
                        p: 1,
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                        color: "black",
                        marginBottom: "2rem",


                    }}>
                    <CardContent>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <h1 style={{ color: "black", fontSize: "3rem", margin: 0, lineHeight: 1 }}>
                                Local Weather
                            </h1>
                            <p
                                style={{
                                    fontSize: "2rem",
                                    margin: 0,
                                    lineHeight: 1,
                                    transform: "translateY(4px)",
                                }}
                            >
                                {new Date().toLocaleString("en-CA", {
                                    timeStyle: "short",
                                    dateStyle: "medium",
                                })}
                            </p>
                        </div>
                    </CardContent>

                </Card>


                <Card
                    variant="outlined"
                    sx={{

                        margin: "auto",
                        borderRadius: 4,
                        p: 1,
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(255,255,255,0.45)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                        color: "black",
                        height: "15rem",
                        paddingBottom: "0"

                    }}

                >
                    <CardContent >

                        <WeatherWidget city={city} onWeatherChange={setWeather} />
                    </CardContent>
                </Card>

            </div>
        </>
    );
}