import { useEffect, useState } from "react";
import weatherIcons from "../utils/weatherIcons";


export default function WeatherWidget({ city, onWeatherChange }) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const description = weather?.current?.weather_descriptions?.[0];
    const icon = weatherIcons[description];




    useEffect(() => {

        async function fetchWeather() {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:3001/weather?city=${encodeURIComponent(city)}`);
                const data = await response.json();
                setWeather(data);
                console.log("Fetched: ", data)
                if (onWeatherChange) onWeatherChange(data);
            } catch (err) {
                setError("Failed to load weather data");
            } finally {
                setLoading(false);
            }
        }

      if (city)  fetchWeather();
    }, [city]);

    if (loading) return <p>Loading weather...</p>;
    if (error) return <p>{error}</p>;
    if (!weather?.location || !weather?.current)
        return <p>No weather data available</p>;

    return (
        <div className="weather-widget">
            <div style={{display: "flex", gap: "1.5rem", alignItems: "center", marginBottom: "0"}}>
                <h2 style={{fontSize: "3rem"}}>{weather.location.name}</h2>
                {icon}
            </div>
            
            <p style={{fontSize: "2rem", marginBottom: "0", marginTop: "0"}}>
                {weather.current.temperature}°C — {weather.current.weather_descriptions[0]}
            </p>


        </div>
    );
}