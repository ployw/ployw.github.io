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
            items={['React', 'Node.js', 'MySQL']}
            link="https://github.com/ployw/notes-pal"
            buttonText={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" aria-hidden="true" focusable="false" height="0.8rem" width="0.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>}
            />
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
            items={['Arduino ATmega2560', 'C']}
            link="https://github.com/ployw/Arduino-Water-Cooler"
            buttonText={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" aria-hidden="true" focusable="false" height="0.8rem" width="0.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>}
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
            buttonText={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" aria-hidden="true" focusable="false" height="0.8rem" width="0.8rem" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>}
            />
        </div>
    </div>
  )
}

export default ProjectGrid