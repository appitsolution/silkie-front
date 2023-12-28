import React from "react";
import HomeHero from "../components/pages/home/Hero";
import Product from "../components/pages/home/Product";
import We from "../components/pages/home/We";
import Plugin from "../components/pages/home/Plugin";
import Partners from "../components/pages/home/Partners";
import Advantages from "../components/pages/home/Advantages";
import Stats from "../components/pages/home/Stats";
import Banner from "../components/pages/home/Banner";
import FeedbackSlider from "../components/pages/home/FeedbackSlider";
import Feedback from "../components/pages/home/Feedback";
import News from "../components/pages/home/News";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Product />
      <We />
      <Plugin />
      <Partners />
      <Advantages />
      <Stats />
      <Banner />
      <FeedbackSlider />
      <Feedback />
      <News />
      <Footer />
    </>
  );
};

export default Home;
