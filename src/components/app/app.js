import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoffeeHouse from '../coffee-house/coffee-house';
import ForYourPleasure from '../for-your-pleasure/for-your-pleasure';
import AboutIt from '../our-coffee/about-it/about-it';
import OurCoffee from '../our-coffee/our-coffee';
import './app.scss';

function App () {
  const data = [
    {imageUrl: '/images/aromistico.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 1},
    {imageUrl: '/images/aromistico.png', name: 'AROMISTICO Coffee 2 kg', country: 'Kenya', price: '6.99$', id: 2},
    {imageUrl: '/images/aromistico.png', name: 'AROMISTICO Coffee 2 kg', country: 'Colombia', price: '6.99$', id: 3},
    {imageUrl: '/images/aromistico.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 4},
    {imageUrl: '/images/aromistico.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 5},
    {imageUrl: '/images/aromistico.png', name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 6},
  ];
    return(
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<CoffeeHouse/>}/>
            <Route path="/ourCoffee" element={<OurCoffee data={data}/>}/>
            <Route path="/ourCoffee/aboutIt" element={<AboutIt/>}/>
            <Route path="/forYourPleasure" element={<ForYourPleasure data={data}/>}/>
          </Routes>
        </Router>
        
      </div>
    )

}

export default App;
