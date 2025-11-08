import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  95: "Thunderstorm",
};

app.get("/weather", async (req, res) => {
  const city = req.query.city || "Edmonton";
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=53.55&longitude=-113.49&current=temperature_2m,weathercode`
  );
  const data = await response.json();

  const code = data.current.weathercode;
  const description = weatherDescriptions[code] || "Unknown";

  res.json({
    location: { name: city },
    current: {
      temperature: data.current.temperature_2m,
      weather_descriptions: [description],
      weather_icons: [],
    },
  });
});

app.listen(3001, () => console.log("Proxy running on http://localhost:3001"));
