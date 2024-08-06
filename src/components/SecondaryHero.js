import React, { Component } from 'react'
import "./SecondaryHeroStyles.css"

const SecondaryHero = ({
  heading
}) => {
    return (
      <div className="hero container">
        <div className="heading inner-div">
            <h1>{heading}</h1>
            <h2 className="line"></h2>
        </div>
      </div>
    );
}

export default SecondaryHero