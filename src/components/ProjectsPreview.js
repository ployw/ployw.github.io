import React from 'react'
import "./ProjectsPreviewStyles.css"
import ProjectCard from "./ProjectCard.js"
import { Link } from "react-router-dom"

const ProjectsPreview = () => {
  return (
    <div className="preview container inner inner-div">
        <div className="preview-content inner col">
            <div className="preview-heading">
                <h3>What I've been working on..</h3>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <ProjectCard 
                    title="🗒️ NotesPal"
                    description="A full-stack application where users, either anonymously or not, can customize and post notes on a message board."
                    items={['React', 'Node.js', 'MySQL']}
                    />
                </div>
                <div className="grid-item">
                    <ProjectCard
                        title="🔊 Auralys"
                        description="A web application that enables users to generate and save Spotify playlists based on their written prompts."
                        items={['Nextjs', 'OpenAI API', 'Spotify API', 'Flask']}
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