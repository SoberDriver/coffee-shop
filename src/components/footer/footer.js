import { Component } from 'react';
import BeansLogo from '../beans-logo/beans-logo';

import NavBar from '../nav-bar/nav-bar';

import './footer.scss';

class Footer extends Component {
  render() {
    const navBarColor = 'black';
    return (
      <div className="footer">
        <NavBar color={navBarColor}/>
        <BeansLogo color={navBarColor}/> 
      </div>
    )
  }
}

export default Footer;