import React from 'react'
import Navbar from "../components/Navbar";
import SecondaryHero from "../components/SecondaryHero"
import ProjectGrid from "../components/ProjectGrid"
import Footer from "../components/Footer"

const Project = () => {
  return (
    <>
      <div className="page">
        <Navbar/>
        <SecondaryHero heading="Projects" />
        <ProjectGrid />
      </div>
      <div className="page-footer">
        <Footer />
      </div>
    </>
  )
}

export default Project