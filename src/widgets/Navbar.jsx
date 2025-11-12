import { Link } from "react-router-dom";
import "./Navbar.css"
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Navbar({ onCityChange }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;
        onCityChange(city.trim());
        setCity("");
    }

    return (
    <nav>
      <Link to="/" style={{ color: "white", fontSize: "25px", fontWeight: "bold", textDecoration: "none" }}>
        Weather App
      </Link>

      <div className="searchBox">
        <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={{ backgroundColor: "white", borderRadius: "6px" }}
          />
          <IconButton type="submit" sx={{ color: "white" }}>
            <SearchIcon />
          </IconButton>
        </form>
      </div>
    </nav>
  );
}