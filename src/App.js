import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import './styles/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
