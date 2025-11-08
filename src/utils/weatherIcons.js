import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GrainIcon from "@mui/icons-material/Grain";

const weatherIcons = {
  "Sunny": <WbSunnyIcon style={{ fontSize: 60, color: "#fbc02d" }} />,
  "Partly cloudy": <CloudIcon style={{ fontSize: 60, color: "#90a4ae" }} />,
  "Overcast": <CloudIcon style={{ fontSize: 60, color: "#607d8b" }} />,
  "Rain": <GrainIcon style={{ fontSize: 60, color: "#2196f3" }} />,
  "Snow": <AcUnitIcon style={{ fontSize: 60, color: "#81d4fa" }} />,
  "Thunderstorm": <ThunderstormIcon style={{ fontSize: 60, color: "#ffb300" }} />,
};

export default weatherIcons;