import React from "react";
import imperativ from "../../../images/partners/Imperativ.svg";

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="partners-block">
          <h3 className="partners-second second-title">Споживачі </h3>
          <h2 className="partners-title first-title">
            Ми цінуємо нашу співпрацю
          </h2>

          <p className="partners-description description">
            Використання вузлів забезпечує гнучке налаштування труда з
            зображеннями, що особливо припаде до смаку вільнонайманцям, які є
            щоглями на їх обробці.
          </p>

          <ul className="partners-list">
            <li className="partners-item">
              <img className="partners-item-image" src={imperativ} />
              <p className="partners-item-description list-description">
                Опис діяльності компанії. Коротка інформація в дві строчки.
              </p>
            </li>
            <li className="partners-item">
              <img className="partners-item-image" src={imperativ} />
              <p className="partners-item-description list-description">
                Опис діяльності компанії. Коротка інформація в дві строчки.
              </p>
            </li>
            <li className="partners-item">
              <img className="partners-item-image" src={imperativ} />
              <p className="partners-item-description list-description">
                Опис діяльності компанії. Коротка інформація в дві строчки.
              </p>
            </li>
            <li className="partners-item">
              <img className="partners-item-image" src={imperativ} />
              <p className="partners-item-description list-description">
                Опис діяльності компанії. Коротка інформація в дві строчки.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;
