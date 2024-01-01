import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import search from "../images/search.svg";
import arrowDown from "../images/ep_arrow-down.svg";
import man from "../images/news/man.jpg";

const Docs = () => {
  const changeClass = ({ target }) => {
    target.classList.toggle("active");
  };

  return (
    <>
      <section className="blog" style={{ position: "relative" }}>
        <div
          className="container"
          style={{
            width: "100%",
            position: "absolute",
            top: "12px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Header />
        </div>
        <div className="blog-block">
          <div className="blog-sidebar" style={{ paddingTop: 150 }}>
            <div className="blog-sidebar-search">
              <input className="blog-sidebar-search-input" />
              <img className="blog-sidebar-search-icon" src={search} />
            </div>

            <ul className="blog-sidebar-menu docs">
              <li className="blog-sidebar-menu-item">
                <p className="blog-sidebar-menu-item-title">Вступ</p>
              </li>
              <li className="blog-sidebar-menu-item">
                <button
                  className="blog-sidebar-menu-item-title"
                  onClick={changeClass}
                >
                  Блоки
                  <img
                    className="blog-sidebar-menu-item-title-icon"
                    src={arrowDown}
                  />
                </button>

                <ul className="blog-sidebar-menu-submenu docs">
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">Ядро</a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">
                      Аутентифікація
                    </a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">Транспорти</a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">
                      Оновлення програм
                    </a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">
                      Спеціальні теги
                    </a>
                  </li>
                </ul>
              </li>
              <li className="blog-sidebar-menu-item">
                <button
                  className="blog-sidebar-menu-item-title"
                  onClick={changeClass}
                >
                  Архів
                  <img
                    className="blog-sidebar-menu-item-title-icon"
                    src={arrowDown}
                  />
                </button>

                <ul className="blog-sidebar-menu-submenu docs">
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">Ядро</a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">
                      Аутентифікація
                    </a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">Транспорти</a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">
                      Оновлення програм
                    </a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">
                      Спеціальні теги
                    </a>
                  </li>
                </ul>
              </li>
              <li className="blog-sidebar-menu-item">
                <button
                  className="blog-sidebar-menu-item-title"
                  onClick={changeClass}
                >
                  КОМПІЛЯТОР API
                  <img
                    className="blog-sidebar-menu-item-title-icon"
                    src={arrowDown}
                  />
                </button>

                <ul className="blog-sidebar-menu-submenu docs">
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">Ядро</a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">
                      Аутентифікація
                    </a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">Транспорти</a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">
                      Оновлення програм
                    </a>
                  </li>
                  <li className="blog-sidebar-menu-submenu-item">
                    <a className="blog-sidebar-menu-submenu-link">
                      Спеціальні теги
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="blog-content" style={{ paddingTop: 150 }}>
            <div className="privacy-column">
              <div className="privacy-wrapper">
                <h2 className="privacy-title">Блоки</h2>
                <p className="privacy-text">
                  Ласкаво просимо до довідкової документації Silkie! Це
                  призначено як ресурс для людей, які вже трохи знайомі зі
                  Silkie і хочуть дізнатися більше про його використання.
                </p>
                <p className="privacy-text">
                  Якщо це не ви (ще), ви можете віддати перевагу відвідати або,
                  перш ніж переглядати це{" "}
                  <a className="privacy-link">Посилання.</a>
                </p>
              </div>

              <div className="privacy-wrapper">
                <h2 className="privacy-title">Ядро</h2>

                <p className="privacy-text">
                  Основні функції Feathers, які працюють на клієнті та сервері
                </p>

                <ul className="privacy-list">
                  <li className="privacy-item">
                    <a className="privacy-link">Програма</a> – основний API
                    програми Feathers
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Сервіси</a> – сервісні об'єкти
                    та їх методи та особливі функції Feathers
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Перехоплювачі</a> - підключене
                    проміжне програмне забезпечення для обслуговування методів
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Події</a> - події, надіслані
                    методами служби Feathers
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Помилки</a> – набір класів
                    помилок, які є в Feathers
                  </li>
                </ul>
              </div>

              <div className="privacy-wrapper">
                <h2 className="privacy-title">Аутентифікація</h2>

                <p className="privacy-text">
                  Основні функції Feathers, які працюють на клієнті та сервері
                </p>

                <ul className="privacy-list">
                  <li className="privacy-item">
                    <a className="privacy-link">Програма</a> – основний API
                    програми Feathers
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Сервіси</a> – сервісні об'єкти
                    та їх методи та особливі функції Feathers
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Перехоплювачі</a> - підключене
                    проміжне програмне забезпечення для обслуговування методів
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Події</a> - події, надіслані
                    методами служби Feathers
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Помилки</a> – набір класів
                    помилок, які є в Feathers
                  </li>
                </ul>
              </div>

              <div className="privacy-wrapper">
                <h2 className="privacy-title">Транспорти</h2>

                <p className="privacy-text">
                  Основні функції Feathers, які працюють на клієнті та сервері
                </p>

                <ul className="privacy-list">
                  <li className="privacy-item">
                    <a className="privacy-link">Програма</a> – основний API
                    програми Feathers
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Сервіси</a> – сервісні об'єкти
                    та їх методи та особливі функції Feathers
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Перехоплювачі</a> - підключене
                    проміжне програмне забезпечення для обслуговування методів
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Події</a> - події, надіслані
                    методами служби Feathers
                  </li>
                  <li className="privacy-item">
                    <a className="privacy-link">Помилки</a> – набір класів
                    помилок, які є в Feathers
                  </li>
                </ul>
              </div>

              <p className="privacy-text">
                Ми збираємо інформацію, яку ви нам надаєте (наприклад, коли
                використовуєте наші Служби й Програмне забезпечення) або
                дозволяєте нам збирати (наприклад, у сторонній інтеграції). Ми
                також збираємо або генеруємо інформацію про те, як саме ви
                запускаєте наші Служби й Програмне забезпечення та
                використовуєте їх, зокрема, коли використовуєте функції, що
                потребують виходу в мережу (наприклад, функцію синхронізації
                фотографій), на своєму настільному комп’ютері чи мобільному
                пристрої. Залежно від того, які Служби та Програмне забезпечення
                ви використовуєте, ця інформація може пов’язуватись із вашим
                пристроєм, браузером, обліковим записом.
              </p>

              <p className="privacy-status" style={{ marginTop: 40 }}>
                Останнє оновлення: 24 грудня 2023 року
              </p>
            </div>

            <ul className="blog-content-pagination">
              <li className="blog-content-pagination-item">
                <button className="blog-content-pagination-item-button">
                  <img
                    className="blog-content-pagination-item-button-icon"
                    src={arrowDown}
                    style={{ transform: "rotate(180deg)" }}
                  />
                </button>
              </li>
              <li className="blog-content-pagination-item">
                <button className="blog-content-pagination-item-button current">
                  1
                </button>
              </li>
              <li className="blog-content-pagination-item">
                <button className="blog-content-pagination-item-button">
                  2
                </button>
              </li>
              <li className="blog-content-pagination-item">
                <button className="blog-content-pagination-item-button">
                  3
                </button>
              </li>
              <li className="blog-content-pagination-item">
                <button className="blog-content-pagination-item-button">
                  4
                </button>
              </li>
              <li className="blog-content-pagination-item">
                <button className="blog-content-pagination-item-button">
                  <img
                    className="blog-content-pagination-item-button-icon"
                    src={arrowDown}
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Docs;
