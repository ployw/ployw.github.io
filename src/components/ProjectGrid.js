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
            title="🎾 Pickle.io"
            description="An application for local pickleball players to easily track teams and matches for MLP-format leagues."
            items={['React', 'TypeScript', 'Supabase']}/>
        </div>
        <div className="grid-item">
            <ProjectCard 
            imgSrc={NotesPal}
            imgAlt="project image"
            title="🗒️ NotesPal"
            description="Inspired by The Unsent Project, this platform allows users to share heartfelt messages, either anonymously or not, on a public message board."
            items={['React', 'Node.js', 'MySQL']}/>
        </div>
        <div className="grid-item">
            <ProjectCard 
            imgSrc={Auralys}
            imgAlt="project image"
            title="🔊 Auralys"
            description="A web application that generates and saves Spotify playlists for users based on their prompts."
            items={['Nextjs', 'OpenAI API', 'Spotify API', 'Flask']}
            />
        </div>
        <div className="grid-item">
        <ProjectCard 
            imgSrc={Pong}
            imgAlt="project image"
            title="🏓 Ping Pong"
            description="A Ping pong game! Try to score against a bot."
            items={['C++', 'Raylib']}/>
        </div>
    </div>
  )
}

export default ProjectGrid