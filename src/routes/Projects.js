import React from 'react'
import PageTitle from "../components/PageTitle"
import ProjectGrid from "../components/ProjectGrid"
import Footer from "../components/Footer"

const Projects = () => {
  return (
    <>
      <div className="page">
        <PageTitle heading="Projects" />
        <ProjectGrid />
      </div>
      <Footer />
    </>
  )
}

export default Projects