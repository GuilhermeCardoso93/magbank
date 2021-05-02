import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenterButton';
import Institucional from './components/Institucional';
import "./App.scss";

import posts from './data/posts';

const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
      <CreditCard />
      <CardList posts={posts}/>
      <CenteredButton>
        <b>
          Abra sua Conta
        </b>
      </CenteredButton>
      <Institucional/>
    </div>
)

export default App;
