import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/charactercard';
import { getData } from './data';
import Store from './store';

const store = new Store(getData());

class App extends Component {
  render() {
    console.log(store);
    return (
      <div className="App">
        <CharacterCard
          name="Ace (GL)"
          sprite="Ace.png"
        />
      </div>
    );
  }
}

export default App;
