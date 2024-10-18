import React from 'react'
import Hero from "../components/Hero";
import ProjectsPreview from "../components/ProjectsPreview"
import Footer from "../components/Footer"
import Skills from "../components/Skills"

const Home = () => {
  return (
    <>
      <div className="page">
        <Hero />
        <ProjectsPreview />
        {/* <Skills /> */}
      </div>
      <Footer />
    </>
  )
}

export default Home