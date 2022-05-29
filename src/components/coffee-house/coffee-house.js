import { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import AboutUs from './about-us/about-us';
import OurBest from './our-best/our-best';

import './coffee-house.scss';

class CoffeeHouse extends Component {
  render() {
    return (
      <div className="coffee-house">
        <Header/>
        <AboutUs/>
        <OurBest/>
        <Footer/>
      </div>
    )
  }
}

export default CoffeeHouse;