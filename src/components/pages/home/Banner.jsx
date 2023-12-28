import React from "react";
import banner from "../../../images/banner/banner.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-block">
          <div className="banner-content">
            <h3 className="banner-content-second second-title">
              Ідея. Рішення. Результат.
            </h3>
            <h2 className="banner-content-title first-title">
              креативна команда професіоналів
            </h2>

            <p className="banner-content-description list-description">
              Ми креативна команда, любимо свою роботу і цінуємо кожного
              клієнта. Наше завдання - реалізовувати творчий підхід до розробки
              нових застосунків.
              <br />
              <br />
              Наша мета - реалізація прогресивної концепції створення, дизайну
              та користування веб-ресурсами. Результатом нашої роботи стає
              висока конверсія сайту і соціально-економічний розвиток клієнта.
              Ми робимо безмежні можливості заробітку в Інтернеті більш
              ефективними.
            </p>
          </div>
          <div className="banner-image">
            <img className="banner-image-img" src={banner} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
