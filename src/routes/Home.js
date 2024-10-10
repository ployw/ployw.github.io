import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsPreview from "../components/ProjectsPreview"
import Footer from "../components/Footer"
import Skills from "../components/Skills"

const Home = () => {
  return (
    <>
      <div className="page">
        <Navbar />
        <Hero />
        <ProjectsPreview />
      </div>
      <Footer />
    </>
  )
}

export default Home