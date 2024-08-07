import React from 'react'
import "./ProjectCardStyles.css"

const ProjectCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  note1,
  note2,
  link,
  buttonText
}) => {
  return (
    <div className="card container">
      {imgSrc && imgAlt && (<img className="card-img" src={imgSrc} alt={imgAlt}>
      </img>)}
      {title && (<h1 className="card-title">{title}</h1>)}
      {description && (<p className="card-description">{description}</p>)}
      <div className="card-notes container inner">
        {note1 && (<p className="card-highlight card-note">{note1}</p>)}
        {note2 && (<p className="card-highlight card-note">{note2}</p>)}
      </div>
      {buttonText && link && (<a className="card-link" target="_blank" href={link} rel="noopener noreferrer">
        <button className="card-button button">
          {buttonText}
        </button>
      </a>)}
    </div>
  )
}

export default ProjectCard