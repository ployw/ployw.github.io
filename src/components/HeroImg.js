import React from 'react'
import "./HeroImgStyles.css"
import IntroImg from "../assets/IntroImg.jpg"
import { Link } from "react-router-dom"
import ProfileImg from "../assets/ProfileImg.jpg"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <div className="profile-img-container">
          <img className="profile-img" src={ProfileImg} alt="ProfileImg"/>
          </div>
            <h2>Ploy Wandeevong</h2>
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