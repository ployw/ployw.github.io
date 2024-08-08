import React from 'react'
import "./ProjectGridStyles.css"
import ProjectCard from "../components/ProjectCard"
import Auralys from "../assets/Auralys.png"
import Arduino from "../assets/Arduino.jpg"
import Pong from "../assets/Pong.png"

const ProjectGrid = () => {
  return (
    <div className="projects-grid container inner inner-div fade-in">
        <div className="grid-item">
            <ProjectCard 
            imgSrc={Auralys}
            imgAlt="project image"
            title="🔊 Auralys"
            description="A web application that enables users to generate and save Spotify playlists based on their written prompts. 1st place at ACM's 2024 Biggest Little Hackathon, Web App Category"
            items={['Nextjs', 'OpenAI API', 'Spotify API', 'Flask']}
            link="https://github.com/joshmatni/Auralys-Spotify-Playlist-Generator"
            buttonText="Github"
            />
        </div>
        <div className="grid-item">
        <ProjectCard 
            imgSrc={Arduino}
            imgAlt="project image"
            title="💡 Arduino Water Cooler"
            description="Cooling system that monitors water level and temperature to trigger several states."
            items={['Arduino ATmega2560', 'C']}
            link="https://github.com/ployw/Arduino-Water-Cooler"
            buttonText="Github"
            />
        </div>
        <div className="grid-item">
        <ProjectCard 
            imgSrc={Pong}
            imgAlt="project image"
            title="🏓 Ping Pong"
            description="Ping pong game application! 1st place at ACM's 2023 Biggest Little Hackathon, Beginner Category"
            items={['C++', 'OOP']}
            link="https://github.com/ployw/Hackathon2023_pong"
            buttonText="Github"
            />
        </div>
    </div>
  )
}

export default ProjectGrid