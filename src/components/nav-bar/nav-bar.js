import { Component } from 'react';
import './nav-bar.scss';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <p>
          <img src="/icons/black-coffee-beans.svg" alt='blac-logo'></img>Coffee house
        </p>
        <p>Our coffee</p>
        <p>For your pleasure</p>
        
      </div>
    )
  }
}

export default NavBar;