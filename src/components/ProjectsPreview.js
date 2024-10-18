import React from 'react'
import "./styles/ProjectsPreviewStyles.css"
import ProjectCard from "./ProjectCard.js"
import { Link } from "react-router-dom"
import { Projects } from "../data/ProjectsData.js";

const ProjectsPreview = () => {
    return (
        <div className="preview container inner inner-div">
            <div className="inner col">
                <div className="preview-heading">
                    <h3>What I've been working on..</h3>
                </div>
                <div className="grid-container">
                    {Projects.slice(0, 2).map((project, i) => {
                        return (
                            <div key={i} className="grid-item">
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    isPreview={true}
                                    items={project.items}
                                />
                            </div>
                        );
                    })}
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