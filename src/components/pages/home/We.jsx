import React from "react";

const We = ({ style = {} }) => {
  return (
    <section className="we" style={style}>
      <div className="container">
        <div className="we-block">
          <h3 className="we-second second-title">Для кого </h3>
          <h2 className="product-content-title first-title">
            Наші особливості
          </h2>

          <p className="we-description description">
            Застосунок пропонує значний добір знадобів та чудово підходить для
            тих, хто займається широкоузірним та числинним друком, а також
            обробкою зображень взагалі.
          </p>

          <ul className="we-list">
            <li className="we-item">
              <img className="we-item-image" />

              <h4 className="we-item-title list-title">
                ДЛЯ ШИРОКОУЗІРНИХ ДРУКАРЕНЬ 
              </h4>

              <p className="we-item-description list-description">
                Вражаюча здатність повністю вирішити всі завдання з впорядження
                первостатних виробів
              </p>
            </li>
            <li className="we-item">
              <img className="we-item-image" />

              <h4 className="we-item-title list-title">ЧИСЛИНИМ ДРУКАРНЯМ</h4>

              <p className="we-item-description list-description">
                Знадоби для більш зручного труда зі снопами, що складаються з
                кількох сторінок
              </p>
            </li>
            <li className="we-item">
              <img className="we-item-image" />

              <h4 className="we-item-title list-title">ВІЛЬНОНАЙМАНЦЯМ</h4>

              <p className="we-item-description list-description">
                Використання вузлів забезпечує гнучке налаштування труда з
                зображеннями, що особливо припаде до смаку вільнонайманцям, які
                є щоглями на їх обробці.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default We;
