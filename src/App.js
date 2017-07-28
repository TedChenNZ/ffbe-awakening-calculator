import React, { Component } from 'react';
import './App.css';
import Store from './store';
import CardGrid from './components/cardgrid';

const store = new Store();
store.addToCart(100000102);

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardGrid store={store} />
      </div>
    );
  }
}

export default App;
