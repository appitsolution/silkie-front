import React from "react";
import Header from "../../Header";

const NewsHero = () => {
  return (
    <section className="news-hero">
      <div className="container">
        <Header current="/news" />
      </div>
      <div className="news-hero-content">
        <h1 className="news-hero-content-title first-title">
          Дізнайся про новини{" "}
        </h1>
        <p className="news-hero-content-description description">
          Налаштуйте саморух своїх додрукарських перебігів за допомогою
          вражаючого добіру знадобів та перетворіть буденність на задоволення.
        </p>
      </div>
    </section>
  );
};

export default NewsHero;
