import './coffee-list.scss';
import React from "react";
import CoffeeItem from '../coffee-item/coffee-item';
import { Link } from 'react-router-dom';


const CoffeeList = (props) => {
  const {data} = props;
  const items = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <Link to='/ourCoffee/aboutIt' style={{color: 'black', textDecoration: 'none'}}>
        <CoffeeItem 
          imageUrl={itemProps.imageUrl} 
          name={itemProps.name}  
          country={itemProps.country}  
          price={itemProps.price}
        />
      </Link>
    )
  });
  return (
    <div className='coffee-list'>
      {items}
    </div>
  )
};

export default CoffeeList;
