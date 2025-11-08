import { useEffect, useState } from "react";

export default function WeatherWidget({ onWeatherChange }) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);




    useEffect(() => {

        async function fetchWeather() {
            try {
                const response = await fetch("http://localhost:3001/weather?city=Edmonton");
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
        fetchWeather();
    }, []);

    if (loading) return <p>Loading weather...</p>;
    if (error) return <p>{error}</p>;
    if (!weather?.location || !weather?.current)
        return <p>No weather data available</p>;

    return (
        <div className="weather-widget">
            <h2>{weather.location.name}</h2>
            
            <p>
                {weather.current.temperature}°C — {weather.current.weather_descriptions[0]}
            </p>

        </div>
    );
}