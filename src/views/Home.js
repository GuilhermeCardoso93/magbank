import React from "react";
import Hero from "../components/Hero";
import CreditCard from "../components/CreditCard";
import CardList from "../components/CardList";
import CenteredButton from "../components/CenterButton";
import Institucional from "../components/Institucional";
import Faq from "../components/Faq";

import "./Home.scss";

import posts from "../data/posts";

const Home = ({ handleClick }) => (
  <>
    <Hero />

    <CreditCard />
    <CardList posts={posts} />
    <CenteredButton onClick={ handleClick }>
      Abra sua Conta
    </CenteredButton>

    <Institucional />
    <Faq />
  </>
);
export default Home;
