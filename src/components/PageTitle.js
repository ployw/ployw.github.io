import React from 'react'
import "./styles/PageTitleStyles.css"

const PageTitle = ({
  heading
}) => {
  return (
    <div className="hero container inner inner-div">
      <div className="heading fade-in">
        <h1>{heading}</h1>
      </div>
    </div>
  );
}

export default PageTitle