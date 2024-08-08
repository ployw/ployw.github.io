import React from 'react'
import Navbar from "../components/Navbar";
import SecondaryHero from "../components/SecondaryHero"
import ProjectGrid from "../components/ProjectGrid"

const Project = () => {
  return (
    <div className="page">>
      <Navbar/>
      <SecondaryHero heading="Projects" />
      <ProjectGrid />
    </div>
  )
}

export default Project