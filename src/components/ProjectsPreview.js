import React from 'react'
import "./ProjectsPreviewStyles.css"
import ProjectCard from "./ProjectCard.js"
import { Link } from "react-router-dom"

const ProjectsPreview = () => {
  return (
    <div className="preview fade-in container inner inner-div">
        <div className="preview-content inner col">
            <div className="preview-heading">
                <h3>What I've been working on..</h3>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <ProjectCard
                        title="🔊 Auralys"
                        description="A web application that enables users to generate and save Spotify playlists based on their written prompts."
                        items={['Nextjs', 'OpenAI API', 'Spotify API', 'Flask']}
                    />
                </div>
                <div className="grid-item">
                    <ProjectCard 
                        title="💡 Arduino Water Cooler"
                        description="Cooling system that monitors water level and temperature to trigger several states."
                        items={['Arduino ATmega2560', 'C']}
                    />
                </div>
            </div>
            <div className="view-button inner">
                <Link to="/projects">
                    <button className="button">
                        View all
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectsPreview