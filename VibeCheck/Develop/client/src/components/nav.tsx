import React from "react";
import { Link } from "react-router-dom"
import "../index.css"

// interface NavbarProps {
//     isLoggedIn: boolean;
// }

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <h1 className="nav-title">Vibe Check</h1>
            <div className="nav-links">
                <Link to="/explore" className="nav-link">
                Explore
                </Link>
                <Link to="/liked-songs" className="nav-link">
                Liked Songs
                </Link>
            </div>
        </nav>
    );
};

export default Navbar