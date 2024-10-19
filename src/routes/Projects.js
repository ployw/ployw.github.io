import React from 'react'
import PageTitle from "../components/common/PageTitle"
import ProjectGrid from "../components/projects/ProjectGrid"
import Footer from "../components/common/Footer"

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