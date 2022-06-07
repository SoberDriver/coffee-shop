import { Component } from 'react';


import './coffee-item.scss';

class CoffeeItem extends Component {
  render() {
    const {imageUrl, name, country, price} = this.props;
    return (
      <div className="coffee-item">
        <div className="image">
          <img src={imageUrl} alt="coffee" />
        </div>
        <div className="item-description">
          <p className="name">{name}</p>
          <p className="country">{country}</p>
          <p className="price">{price}</p>
        </div>
        
        
      </div>
    )
  }
}

export default CoffeeItem;