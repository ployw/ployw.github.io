import React from 'react'
import "../styles/HeroStyles.css"
import { AboutMe, Links } from "../../data/AboutData";
import { FaGithub, FaLinkedin  } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="fade-in container home center inner-div">
            <div className="about-content center">
                <div className="about-me center">
                    <h1>Hello, I'm <span className="highlight">Ploy</span>!</h1>
                    <p>{AboutMe.about}</p>
                </div>
                <div className="about-links center">
                    <a target="_blank" aria-label="Github Link" className="icon button" href={Links.github} rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a target="_blank" aria-label="LinkedIn Link" className="icon button" href={Links.linkedin} rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <p className="highlight">{Links.gmail}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero