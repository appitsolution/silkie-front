import React from "react";
import arrow from "../../../images/ep_arrow-down.svg";

const News = () => {
  return (
    <section className="home-news">
      <div className="container">
        <div className="home-news-block">
          <h2 className="home-news-second second-title">Денник</h2>
          <h3 className="home-news-title first-title">
            Дізнайся про новини першим
          </h3>

          <ul className="home-news-list">
            <li className="home-news-item">
              <p className="home-news-item-date">21.12.2022</p>
              <img className="home-news-item-image" />
              <h4 className="home-news-item-title second-title">
                Canja de Galinha нові можливості
              </h4>
              <p className="home-news-item-description list-description">
                Смачне пряженя без жодної насильницької оруди над курками,
                розігрійте сковорідку, додайте кілька.
              </p>

              <button className="home-news-item-button">
                Читати більше
                <img className="home-news-item-button-icon" src={arrow} />
              </button>
            </li>
            <li className="home-news-item">
              <p className="home-news-item-date">21.12.2022</p>
              <img className="home-news-item-image" />
              <h4 className="home-news-item-title second-title">
                Canja de Galinha нові можливості
              </h4>
              <p className="home-news-item-description list-description">
                Смачне пряженя без жодної насильницької оруди над курками,
                розігрійте сковорідку, додайте кілька.
              </p>

              <button className="home-news-item-button">
                Читати більше
                <img className="home-news-item-button-icon" src={arrow} />
              </button>
            </li>
            <li className="home-news-item">
              <p className="home-news-item-date">21.12.2022</p>
              <img className="home-news-item-image" />
              <h4 className="home-news-item-title second-title">
                Canja de Galinha нові можливості
              </h4>
              <p className="home-news-item-description list-description">
                Смачне пряженя без жодної насильницької оруди над курками,
                розігрійте сковорідку, додайте кілька.
              </p>

              <button className="home-news-item-button">
                Читати більше
                <img className="home-news-item-button-icon" src={arrow} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default News;
