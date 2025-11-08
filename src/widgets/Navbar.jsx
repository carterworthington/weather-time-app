import { Link } from "react-router-dom";
import "./Navbar.css"
import { TextField } from "@mui/material";

export default function Navbar() {
    return (
        <nav >
            <Link to="/">Weather</Link>
            <Link to="/about">About</Link>
            <TextField id="standard-basic" label="Search" variant="standard" />
        </nav>
    )
}