import React from "react"
import BeansLogo from "../beans-logo/beans-logo";

import './about-description.scss';

const AboutDescription = (props) => {
  const {firstMessage, secondMessage, imgSource, desriptionTitle} = props;
  return (
    <div className="about-description">
      {imgSource ? <img src={imgSource} alt={desriptionTitle}/> : <></>}
      <div className="about-description-text">
        <h2>About {desriptionTitle}</h2>
        <BeansLogo color={"black"}/>
        <p className='description'>
          {firstMessage}
          <br/>
          <br/>
          {secondMessage}
        </p>
      </div>
    </div>
  )
};

export default AboutDescription;
