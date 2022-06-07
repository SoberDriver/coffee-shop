import './our-coffee.scss';
import React, { useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Filter from "./filter/filter";
import Search from "./search/search";
import AboutDescription from "../about-description/about-description";
import CoffeeList from "../coffee-list/coffee-list";


const OurCoffee = (props) => {
  const {data} = props;
  const [activeFilter, setActiveFilter] = useState('');
  const [searchValue, setSearchValue] = useState('')

  const bgImage = './images/our-coffee-bg.jpg';
  const height = '260px';
  const headerTitle = 'Our Coffee';
  const firstMessage = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.';
  const secondMessage = 'Afraid at highly months do things on at. Situation recommend objection do intention' +
    'so questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want.' +
    'Children me laughing we prospect answered followed. At it went is song that held help face.';
  const imgSource = './images/our-beans.jpg';
  const desriptionTitle = 'our beans';

  const updateFilter = (name) => {
    activeFilter !== name ? setActiveFilter(name) : setActiveFilter('');
  }
  const filterData = (data) => {
    return data.filter(item => {
      if (!activeFilter) {
        return item;
      }
      return item.country === activeFilter;
    })
  }

  const updateSearchValue = (value) => {
    value !== searchValue ? setSearchValue(value) : setSearchValue('');
  }
  const searchData = (data, searchValue) => {
    if (!searchValue) {
      return data;  
    }
    return data.filter(item => {
      return item.name.indexOf(searchValue) > -1
    })
  }


  const visibleData = filterData(searchData(data, searchValue));

  return (
    <div className="our-coffee">
      <Header 
        isHero={false} 
        bgImage={bgImage}
        height={height}
        headerTitle={headerTitle}
      />
      <AboutDescription
        firstMessage={firstMessage}
        secondMessage={secondMessage}
        imgSource={imgSource}
        desriptionTitle={desriptionTitle}
      />
      <div className="filter-wrapper">
        <Search updateSearchValue={updateSearchValue}/>
        <Filter filter={activeFilter} updateFilter={updateFilter}/>
      </div>
      <CoffeeList data={visibleData}/>
      <Footer/>
    </div>
  )
};

export default OurCoffee;
