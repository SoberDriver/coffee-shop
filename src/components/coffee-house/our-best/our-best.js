import { Component } from 'react';
import CoffeeList from '../../coffee-list/coffee-list';

import './our-best.scss';

class OurBest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {imageUrl: '/images/aromistico.png', name: 'AROMISTICO Coffee 1 kg', country: '', price: '6.99$', id: 1},
        {imageUrl: '/images/presto.png', name: 'Presto Coffee Beans 1 kg', country: '', price: '15.99$', id: 2},
        {imageUrl: '/images/solimo.png', name: 'Solimo Coffee Beans 2 kg', country: '', price: '10.73$', id: 3},
      ]
    };
  }
  render() {
    return (
      <div className="our-best">
          <h2>Our Best</h2>
          <div className="best-items">
            <CoffeeList data={this.state.data}/>
          </div>
      </div>
    )
  }
}

export default OurBest;