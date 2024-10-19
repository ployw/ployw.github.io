import React from 'react'
import "../styles/SectionStyles.css"
import ProjectCard from "../common/ProjectCard.js"
import { Link } from "react-router-dom"
import { Projects } from "../../data/ProjectsData.js";

const ProjectsPreview = () => {
    return (
        <div className="fade-in container center inner-div">
            <div className="center col">
                <div className="heading">
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
                <div className="view-button center">
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