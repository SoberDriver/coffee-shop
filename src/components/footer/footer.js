import { Component } from 'react';
import BeansLogo from '../beans-logo/beans-logo';

import NavBar from '../nav-bar/nav-bar';

import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <NavBar/>
        <BeansLogo/> 
      </div>
    )
  }
}

export default Footer;