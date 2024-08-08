import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import Resume from "../files/resume.pdf"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100)
        {
            setColor(true);
        }
        else
        {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className= {color ? "header header-bg" : "header"}>
        <nav className="nav container">
            <Link to="/">
                <h1 className="name-title">Ploy Wandeevong</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <a target="_blank" className="link" href={Resume} rel="noopener noreferrer"> 
                        Resume 
                    </a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />)}
            </div>
        </nav>
    </div>
  )
}

export default Navbar