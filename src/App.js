import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards/Cards'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cards/> 
      </div>
    );
  }
}

export default App;
