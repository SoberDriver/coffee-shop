import React from "react"
import BeansLogo from '../beans-logo/beans-logo';

import './hero.scss';

const Hero = (props) => {
  return ( 
    <div className='hero-wrapper'>
        <h1>Everything You Love About Coffee</h1>
        <BeansLogo color={props.navBarColor}/>
        <h2>We makes every day full of energy and taste</h2>
        <h2>Want to try our beans?</h2>
        <button type='button' className='btn btn-more'>More</button>
    </div>
  )
};

export default Hero;
