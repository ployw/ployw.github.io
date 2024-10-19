import React, { Component } from 'react'
import { Tech } from "../../data/AboutData";
import "../styles/SectionStyles.css"
import ProjectCard from "../common/ProjectCard"

const Skills = () => {
    return (
        <div className="fade-in container center inner-div">
            <div className="center col">
                <div className="heading">
                    <h3>Skills</h3>
                </div>
                <div className="skill-list center inner-div">
                    {Tech.skillList.map((item, index) => (
                        <p className="card-highlight" key={index}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;
