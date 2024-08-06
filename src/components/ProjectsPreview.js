import React from 'react'
import "./ProjectsPreviewStyles.css"
import ProjectCard from "./ProjectCard.js"
import { Link } from "react-router-dom"

const ProjectsPreview = () => {
  return (
    <div className="preview container fade-in">
        <div className="preview-heading inner-div">
            <h3>What I've been working on..</h3>
        </div>
        <div className="grid-container">
            <div className="grid-item">
                <ProjectCard
                    title="🔊 Auralys"
                    description="A web application that enables users to generate and save Spotify playlists based on their written prompts."
                    note1="NextJS, Flask, Spotify API, OpenAI API"
                    note2="1st place in ACM's 2024 Biggest Little Hackathon, App Development Category"
                />
            </div>
            <div className="grid-item">
                <ProjectCard 
                    title="💡 Arduino Water Cooler"
                    description="Cooling system that monitors water level and temperature to trigger several states."
                    note1="Arduino ATmega2560, C"
                />
            </div>
        </div>
        <div className="view-button">
            <Link to="/projects">
                <button className="button">
                    View all
                </button>
            </Link>
        </div>
    </div>
  )
}

export default ProjectsPreview