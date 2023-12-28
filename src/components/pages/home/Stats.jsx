import React from "react";

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-block">
          <h2 className="stats-title first-title">
            Ми є досить успішною компанією
          </h2>

          <p className="stats-description description">
            Застосунок пропонує значний добір знадобів та чудово підходить для
            тих, хто займається широкоузірним та числинним друком, а також
            обробкою зображень взагалі.
          </p>

          <ul className="stats-list">
            <li className="stats-item">
              <h3 className="stats-item-title second-title">Засновано</h3>
              <p className="stats-item-value">2019</p>
              <p className="stats-item-description list-description">
                Вражаюча здатність вирішити всі завдання з впорядження.
              </p>
            </li>
            <li className="stats-item">
              <h3 className="stats-item-title second-title">Успішні проекти</h3>
              <p className="stats-item-value">50+</p>
              <p className="stats-item-description list-description">
                Вражаюча здатність вирішити всі завдання з впорядження.
              </p>
            </li>
            <li className="stats-item">
              <h3 className="stats-item-title second-title">Підписники</h3>
              <p className="stats-item-value">220</p>
              <p className="stats-item-description list-description">
                Вражаюча здатність вирішити всі завдання з впорядження.
              </p>
            </li>
            <li className="stats-item">
              <h3 className="stats-item-title second-title">Засновано</h3>
              <p className="stats-item-value">2026</p>
              <p className="stats-item-description list-description">
                Вражаюча здатність вирішити всі завдання з впорядження.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stats;
