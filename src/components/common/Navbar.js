import { Link } from "react-router-dom"
import "../styles/NavbarStyles.css"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 24) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <nav className="nav container">
                <Link to="/">
                    <p className="name-title">Ploy Wandeevong</p>
                </Link>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
                </div>
            </nav>
        </div>
    )
}

export default Navbar