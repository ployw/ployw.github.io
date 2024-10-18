import React from 'react'
import "./styles/ProjectGridStyles.css"
import ProjectCard from "../components/ProjectCard"
import { Projects } from "../data/ProjectsData"

const ProjectGrid = () => {
    return (
        <div className="projects-grid container inner inner-div">
            {Projects.map((project, i) => {
                return (
                    <div key={i} className="grid-item">
                        <ProjectCard
                            title={project.title}
                            imgSrc={project.img}
                            imgAlt="project image"
                            description={project.description}
                            isPreview={false}
                            items={project.items}
                        />
                    </div>
                );
            })}
        </div>
    )
}

export default ProjectGrid