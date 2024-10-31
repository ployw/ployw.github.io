import React from 'react'
import Hero from "../components/home/Hero";
import ProjectsPreview from "../components/home/ProjectsPreview"
import Footer from "../components/common/Footer"

const Home = () => {
  return (
    <>
      <div className="page">
        <Hero />
        <ProjectsPreview />
      </div>
      <Footer />
    </>
  )
}

export default Home