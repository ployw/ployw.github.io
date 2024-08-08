import React from 'react'
import "./ProjectCardStyles.css"

const ProjectCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  items,
  link,
  buttonText
}) => {
  return (
    <div className="card container">
      {imgSrc && imgAlt && (<img className="card-img" src={imgSrc} alt={imgAlt}>
      </img>)}
      {title && (<h1 className="card-title">{title}</h1>)}
      {description && (<p className="card-description">{description}</p>)}
      {items && (<div className="card-items container inner">
        <ul className="card-items-list">
          {items.map((item, index) => (
            <li className="card-item card-highlight" key={index}>{item}</li>
          ))}
        </ul>
      {buttonText && link && (<a className="card-link" target="_blank" href={link} rel="noopener noreferrer">
        <button className="icon-2 button card-button">
          {buttonText}
        </button>
      </a>)}
      </div>)}
    </div>
  )
}

export default ProjectCard