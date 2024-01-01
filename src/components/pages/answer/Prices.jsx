import React from "react";
import arrow from "../../../images/arrow.svg";

const Prices = () => {
  return (
    <section className="prices">
      <div className="container">
        <div className="prices-block">
          <div className="prices-head">
            <p className="prices-second second-title">Ціноутворення</p>
            <h2 className="prices-title first-title">Тарифні плани</h2>
            <p className="prices-description description">
              Ми вважаємо, що майже всю додрукарську підготовку, пов'язану з
              цифровим та широкоформатним друкуванням.Ми вважаємо, що майже всю
              додрукарську підготовку, пов'язану з цифровим та широкоформатним
              друкуванням.
            </p>
          </div>

          <div className="prices-variants">
            <ul className="prices-variants-list">
              <li className="prices-variants-item">
                <p className="prices-variants-item-price second-title">
                  120 USD
                </p>

                <h3 className="prices-variants-item-title first-title">
                  Користувацький
                </h3>

                <ul className="prices-variants-item-plus">
                  <li className="prices-variants-item-plus-item">
                    <img
                      className="prices-variants-item-plus-item-icon"
                      src={arrow}
                    />
                    Переваги цього тарифного плану
                  </li>
                  <li className="prices-variants-item-plus-item">
                    <img
                      className="prices-variants-item-plus-item-icon"
                      src={arrow}
                    />
                    Переваги тарифного плану
                  </li>
                  <li className="prices-variants-item-plus-item">
                    <img
                      className="prices-variants-item-plus-item-icon"
                      src={arrow}
                    />
                    Переваги тарифного плану
                  </li>
                  <li className="prices-variants-item-plus-item">
                    <img
                      className="prices-variants-item-plus-item-icon"
                      src={arrow}
                    />
                    Переваги тарифного плану
                  </li>
                  <li className="prices-variants-item-plus-item">
                    <img
                      className="prices-variants-item-plus-item-icon"
                      src={arrow}
                    />
                    Переваги тарифного плану
                  </li>
                </ul>
                <div className="prices-variants-item-button-block">
                  <button className="prices-variants-item-button first-button">
                    Вибрати
                  </button>
                </div>

                <p className="prices-variants-item-note list-description">
                  Текст примітка що до тарифного плану та місячної підписки на
                  тарифний план.
                </p>
              </li>
              <li className="prices-variants-item">
                <p className="prices-variants-item-price second-title">
                  120 USD
                </p>

                <h3 className="prices-variants-item-title first-title">
                  Користувацький
                </h3>

                <ul className="prices-variants-item-plus">
                  <li className="prices-variants-item-plus-item">
                    <img
                      className="prices-variants-item-plus-item-icon"
                      src={arrow}
                    />
                    Переваги цього тарифного плану
                  </li>
                  <li className="prices-variants-item-plus-item">
                    <img
                      className="prices-variants-item-plus-item-icon"
                      src={arrow}
                    />
                    Переваги тарифного плану
                  </li>
                  <li className="prices-variants-item-plus-item">
                    <img
                      className="prices-variants-item-plus-item-icon"
                      src={arrow}
                    />
                    Переваги тарифного плану
                  </li>
                  <li className="prices-variants-item-plus-item">
                    <img
                      className="prices-variants-item-plus-item-icon"
                      src={arrow}
                    />
                    Переваги тарифного плану
                  </li>
                  <li className="prices-variants-item-plus-item">
                    <img
                      className="prices-variants-item-plus-item-icon"
                      src={arrow}
                    />
                    Переваги тарифного плану
                  </li>
                </ul>

                <div className="prices-variants-item-button-block">
                  <button className="prices-variants-item-button first-button">
                    Вибрати
                  </button>
                </div>

                <p className="prices-variants-item-note list-description">
                  Текст примітка що до тарифного плану та місячної підписки на
                  тарифний план.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
