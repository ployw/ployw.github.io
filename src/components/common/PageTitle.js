import React from 'react'
import "../styles/PageTitleStyles.css"

const PageTitle = ({
  heading
}) => {
  return (
    <div className="fade-in hero container inner inner-div">
      <div className="heading">
        <h3>{heading}</h3>
      </div>
    </div>
  );
}

export default PageTitle