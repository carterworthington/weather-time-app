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
  const city = req.query.city?.trim();
  if (!city || !/^[a-zA-Z\s]{2,40}$/.test(city)) {
    return res.status(400).json({ error: "Invalid city name" });
  }

  try {
    // Step 1: get coordinates
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );
    const geoData = await geoRes.json();

    if (!geoData.results?.length) {
      return res.status(404).json({ error: "City not found" });
    }

    const { latitude, longitude, name, country } = geoData.results[0];
    console.log(`→ ${name}, ${country}: (${latitude}, ${longitude})`);

    // Step 2: use those coordinates
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode`
    );
    const weatherData = await weatherRes.json();

    const code = weatherData.current.weathercode;
    const description = weatherDescriptions[code] || "Unknown";

    res.json({
      location: { name, country },
      current: {
        temperature: weatherData.current.temperature_2m,
        weather_descriptions: [description],
        weather_icons: [],
      },
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.listen(3001, () => console.log("Proxy running on http://localhost:3001"));
