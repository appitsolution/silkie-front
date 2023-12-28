import React from "react";
import Header from "../../Header";
import hero from "../../../images/home-hero.jpg";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="home-hero-block">
          <Header />

          <div className="home-hero-content">
            <h1 className="home-hero-content-title">Розумні рішення</h1>
            <h2 className="home-hero-content-second">нОВІ МОЖЛИВОСТІ</h2>
            <p className="home-hero-content-description">
              Налаштуйте саморух своїх додрукарських перебігів за допомогою
              вражаючого добіру знадобів та перетворіть буденність на
              задоволення.
            </p>

            <button className="home-hero-content-button">
              Зареєструватись
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
