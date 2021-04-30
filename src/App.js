import React from 'react';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Navbar from './components/Navbar';
import "./App.scss";
import Hero from './components/Hero';

const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
)

export default App;
