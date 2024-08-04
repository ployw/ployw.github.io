import React from 'react'
import "./HeroImgStyles.css"
import IntroImg from "../assets/IntroImg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <h1>Ploy Wandeevong</h1>
            <p>Hello, I'm an undergrad junior studying Computer Science and Engineering!</p>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/resume" className="btn btn-light">Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg