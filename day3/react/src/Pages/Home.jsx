// import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Section from "../components/Section";



const Home = () => {
    let aqua = "blue";
  return (
    <>
      <Navbar colors = {aqua}/>
      <Section />
      <Footer />
    </>
  );
};

export default Home;
