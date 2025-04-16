import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Home/Hero/Hero.jsx";
import Featured from "../components/Home/Featured/Featured.jsx";
import WhyUs from "../components/Home/WhyUs/WhyUs.jsx";
import OurMission from "../components/Home/Mission/OurMission.jsx";
import CarNews from "../components/Home/News/CarNews.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <WhyUs />
      <OurMission />
      <CarNews />
      <Footer />
    </>
  );
};

export default Home;
