import { Component } from 'react';
import BeansLogo from '../beans-logo/beans-logo';
import NavBar from '../nav-bar/nav-bar';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavBar/>
        <div className='wrapper'>
        <h1>Everything You Love About Coffee</h1>
        <BeansLogo/>
        <h2>We makes every day full of energy and taste</h2>
        <h2>Want to try our beans?</h2>
        <button>More</button>
        </div>
        
        
      </div>
    )
  }
}

export default Header;