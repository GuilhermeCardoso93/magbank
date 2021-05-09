import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditCard from "./components/CreditCard";
import CardList from "./components/CardList";
import CenteredButton from "./components/CenterButton";
import Institucional from "./components/Institucional";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import posts from "./data/posts";

const App = () => {
  const [ showModal, setShowModal] = useState(false);
  return (
  <div className="App">
    <Navbar handleCreateAcc={() => setShowModal (true)}/>
    <Hero />
    <CreditCard />
    <CardList posts={posts} />
    <CenteredButton>
      <b>Abra sua Conta</b>
    </CenteredButton>
    <Institucional />
    <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
   </div>   
);
  };

export default App;
