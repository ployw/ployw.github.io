import React from 'react'
import "./ProjectGridStyles.css"
import ProjectCard from "../components/ProjectCard"
import Auralys from "../assets/Auralys.png"
import Arduino from "../assets/Arduino.png"
import Pong from "../assets/Pong.png"
import NotesPal from "../assets/NotesPal.png"

const ProjectGrid = () => {
  return (
    <div className="projects-grid container inner inner-div">
        <div className="grid-item">
            <ProjectCard 
            imgSrc={NotesPal}
            imgAlt="project image"
            title="🗒️ NotesPal"
            description="A place where people can share their thoughts and messages, either anonymously or not. Users can customize, create, and search for posts on a message board."
            items={['React', 'Node.js', 'MySQL']}/>
        </div>
        <div className="grid-item">
            <ProjectCard 
            imgSrc={Auralys}
            imgAlt="project image"
            title="🔊 Auralys"
            description="A web application that generates and saves Spotify playlists for users based on their prompts. 1st place at ACM's 2024 Biggest Little Hackathon, Web App Category"
            items={['Nextjs', 'OpenAI API', 'Spotify API', 'Flask']}
            />
        </div>
        <div className="grid-item">
        <ProjectCard 
            imgSrc={Arduino}
            imgAlt="project image"
            title="💡 Arduino Water Cooler"
            description="Cooling system that monitors water level and temperature to trigger several states."
            items={['Arduino ATmega2560', 'C']}/>
        </div>
        <div className="grid-item">
        <ProjectCard 
            imgSrc={Pong}
            imgAlt="project image"
            title="🏓 Ping Pong"
            description="Ping pong game application! 1st place at ACM's 2023 Biggest Little Hackathon, Beginner Category"
            items={['C++', 'OOP']}/>
        </div>
    </div>
  )
}

export default ProjectGrid