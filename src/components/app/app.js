import { Component } from 'react';
import CoffeeHouse from '../coffee-house/coffee-house';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="app">
        <CoffeeHouse/>
      </div>
    )
    
  }
}

export default App;
