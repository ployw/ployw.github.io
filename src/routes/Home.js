import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsPreview from "../components/ProjectsPreview"

const Home = () => {
  return (
    <div className="page">
      <Navbar/>
      <Hero />
      <ProjectsPreview />

    </div>
  )
}

export default Home