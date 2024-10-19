import React from 'react'
import Hero from "../components/home/Hero";
import ProjectsPreview from "../components/home/ProjectsPreview"
import Footer from "../components/common/Footer"
import Skills from "../components/home/Skills"

const Home = () => {
  return (
    <>
      <div className="page">
        <Hero />
        <Skills />
        <ProjectsPreview />
      </div>
      <Footer />
    </>
  )
}

export default Home