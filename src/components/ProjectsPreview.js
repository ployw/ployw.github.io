import React from 'react'
import "./ProjectsPreviewStyles.css"
import ProjectCard from "./ProjectCard.js"
import { Link } from "react-router-dom"

const ProjectsPreview = () => {
  return (
    <div className="preview container inner inner-div">
        <div className="inner col">
            <div className="preview-heading">
                <h3>What I've been working on..</h3>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <ProjectCard
                        title="🎾 Pickle.io"
                        description="An application for local pickleball players to easily track teams and matches for MLP-format leagues."
                        isPreview={true}
                    />
                </div>
                <div className="grid-item">
                    <ProjectCard 
                        title="🗒️ NotesPal"
                        description="Inspired by The Unsent Project, this platform allows users to share heartfelt messages, either anonymously or not, on a public message board."
                        isPreview={true}
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