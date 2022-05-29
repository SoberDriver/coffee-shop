import { Component } from 'react';
import './beans-logo.scss';

class BeansLogo extends Component {
  render() {
    return (
      <div className="beans-logo">
        <div className="line"></div>
        <img src='/icons/black-logo.svg' alt="black-logo" />
        <div className="line"></div>
      </div>
    )
  }
}

export default BeansLogo;