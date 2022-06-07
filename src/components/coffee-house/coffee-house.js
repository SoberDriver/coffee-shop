import { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import AboutUs from './about-us/about-us';
import OurBest from './our-best/our-best';

import './coffee-house.scss';

class CoffeeHouse extends Component {
  render() {
    const bgImage = './images/hero-bg.png';
    const isHero = true;
    const height = '640px';
    return (
      <div className="coffee-house">
        <Header 
          isHero={isHero} 
          bgImage={bgImage}
          height={height}/>
        <AboutUs/>
        <OurBest/>
        <Footer/>
      </div>
    )
  }
}

export default CoffeeHouse;