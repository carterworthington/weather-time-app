import React from "react";
import WeatherWidget from "../widgets/WeatherWidget";
import '../widgets/home.css'

export default function Home() {
    return (
        <div className="home-content">
            <h1>Weather</h1>
            <WeatherWidget />
        </div>
    );
}