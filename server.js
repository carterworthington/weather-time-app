import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/weather", async (req, res) => {
  const city = req.query.city || "Edmonton";
  const response = await fetch(`http://api.weatherstack.com/current?access_key=5860ff46131b48bf223a39b414e0581d&query=${city}`);
  const data = await response.json();
  res.json(data);
});

app.listen(3001, () => console.log("Proxy running on http://localhost:3001"));
