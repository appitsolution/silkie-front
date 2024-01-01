import React from "react";
import Footer from "../components/Footer";
import AnswerHero from "../components/pages/answer/Hero";
import Tasks from "../components/pages/answer/Tasks";
import We from "../components/pages/home/We";
import Partners from "../components/pages/home/Partners";
import Prices from "../components/pages/answer/Prices";
import Feedback from "../components/pages/home/Feedback";
import Questions from "../components/pages/answer/Questions";

const Answer = () => {
  return (
    <>
      <AnswerHero />
      <Tasks />
      <We style={{ paddingBottom: "120px" }} />
      <Partners />
      <Prices />
      <Feedback />
      <Questions />
      <Footer />
    </>
  );
};

export default Answer;
