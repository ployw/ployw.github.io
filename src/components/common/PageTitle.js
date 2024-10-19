import React from 'react'
import "../styles/PageTitleStyles.css"

const PageTitle = ({
  heading
}) => {
  return (
    <div className="fade-in hero container inner inner-div">
      <div className="heading">
        <h1>{heading}</h1>
      </div>
    </div>
  );
}

export default PageTitle