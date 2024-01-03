import React from "react";
import Header from "../../Header";
import background1 from "../../../images/answer-hero/background1.jpg";
import background2 from "../../../images/answer-hero/background2.png";
import content from "../../../images/answer-hero/content.jpg";

const AnswerHero = () => {
  return (
    <section className="answer-hero">
      <div className="answer-hero-block">
        <div className="container">
          <Header current="/answer" />
        </div>
        <img className="answer-hero-background1" src={background1} />
        <img className="answer-hero-background2" src={background2} />
        <div className="container">
          <div className="answer-hero-content">
            <div className="answer-hero-content-info">
              <h1 className="answer-hero-content-info-title first-title">
                Chicken Nuggets
              </h1>
              <h1 className="answer-hero-content-info-title first-title">
                For Adobe Photoshop
              </h1>

              <img
                className="answer-hero-content-image-img-mobile"
                src={content}
              />

              <p className="answer-hero-content-info-description description">
                Це просте, інтуїтивне та потужне розширення розроблене для того,
                щоб допомогти дизайнерам керувати перебігом впровадження
                документів для друку.
              </p>

              <p className="answer-hero-content-info-note list-description">
                Приєднуйтесь до використання розширення наступного покоління та
                станьте частиною нашої спільноти.
              </p>

              <div className="answer-hero-content-info-button-block">
                <button className="answer-hero-content-info-button first-button">
                  Зареєструватись
                </button>
              </div>
            </div>
            <div className="answer-hero-content-image">
              <img className="answer-hero-content-image-img" src={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnswerHero;
