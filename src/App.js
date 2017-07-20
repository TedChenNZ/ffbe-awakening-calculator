import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/charactercard';

class App extends Component {
  render() {
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
