import './for-your-pleasure.scss';
import React from "react";
import Header from '../header/header';
import Footer from '../footer/footer';
import AboutDescription from '../about-description/about-description';
import CoffeeList from '../coffee-list/coffee-list';

const ForYourPleasure = (props) => {
  const {data} = props;
  const height = '260px';
  const bgImage = './images/for-your-pleasure-bg.jpg';
  const headerTitle = 'For your pleasure';
  const firstMessage = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.';
  const secondMessage = 'Afraid at highly months do things on at. Situation recommend objection do intention' +
  'so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.' +
  'Children me laughing we prospect answered followed. At it went is song that held help face.';
  const imgSource = './images/our-goods.jpg';
  const desriptionTitle = 'our goods';
  return (
    <div>
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
      <CoffeeList data={data}/>
      <Footer/>
    </div>
  )
};

export default ForYourPleasure;