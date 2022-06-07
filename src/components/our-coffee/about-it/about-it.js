import './about-it.scss';
import React from "react";
import BeansLogo from '../../beans-logo/beans-logo';

const AboutIt = (props) => {
  return (
    <div>
      <img src="./images/our-beans.jpg" alt="Our beans" />
      <div className="beans-description">
        <h2>About it</h2>
        <BeansLogo color={"black"}/>
        <p className='description'>
          Country: Brazil.
          <br/>
          <br/>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          <br/>
          Price: 16.99$
        </p>
      </div>
    </div>
  )
};

export default AboutIt;