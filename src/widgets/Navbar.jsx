import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav >
            <Link to="/">Weather</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}