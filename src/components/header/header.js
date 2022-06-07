import { Component } from 'react';
import Hero from '../hero/hero';
import NavBar from '../nav-bar/nav-bar';
import './header.scss';

class Header extends Component {
  render() {
    const navBarColor = 'white';
    let hero;
    let headerTitle;
    if (this.props.isHero) {
      hero = <Hero navBarColor={navBarColor}/>;
    } else {
      hero = <></>
    }
    if (this.props.headerTitle) {
      headerTitle = <h1 className='header-title'>{this.props.headerTitle}</h1>;
    } else {
      headerTitle = <></>
    }
    return (
      <div 
        className="header"  
        style={{
            backgroundImage: `url(${this.props.bgImage})`,
            height: `${this.props.height}`
          }}>

        <div className="nav-wrapper">
          <NavBar color={navBarColor}/>
        </div>
        {hero}
        <div className="title-wrapper">
        {headerTitle} 
        </div>
          
      </div>
    )
  }
}

export default Header;