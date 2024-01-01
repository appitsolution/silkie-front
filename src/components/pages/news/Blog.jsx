import React from "react";
import search from "../../../images/search.svg";
import arrowDown from "../../../images/ep_arrow-down.svg";
import man from "../../../images/news/man.jpg";
import Header from "../../Header";

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-block">
        <div className="blog-sidebar">
          <div className="blog-sidebar-search">
            <input className="blog-sidebar-search-input" />
            <img className="blog-sidebar-search-icon" src={search} />
          </div>

          <ul className="blog-sidebar-menu">
            <li className="blog-sidebar-menu-item">
              <p className="blog-sidebar-menu-item-title">Категорії</p>

              <ul className="blog-sidebar-menu-submenu">
                <li className="blog-sidebar-menu-submenu-item">
                  <a className="blog-sidebar-menu-submenu-link">Новини</a>
                </li>
                <li className="blog-sidebar-menu-submenu-item">
                  <a className="blog-sidebar-menu-submenu-link">Події</a>
                </li>
                <li className="blog-sidebar-menu-submenu-item">
                  <a className="blog-sidebar-menu-submenu-link">Доповнення</a>
                </li>
                <li className="blog-sidebar-menu-submenu-item">
                  <a className="blog-sidebar-menu-submenu-link">
                    Оновлення програм
                  </a>
                </li>
                <li className="blog-sidebar-menu-submenu-item">
                  <a className="blog-sidebar-menu-submenu-link">Ресурси</a>
                </li>
              </ul>
            </li>
            <li className="blog-sidebar-menu-item">
              <p className="blog-sidebar-menu-item-title">Архів</p>

              <ul className="blog-sidebar-menu-submenu">
                <li className="blog-sidebar-menu-submenu-item">
                  <a className="blog-sidebar-menu-submenu-link">Новини</a>
                </li>
                <li className="blog-sidebar-menu-submenu-item">
                  <a className="blog-sidebar-menu-submenu-link">Події</a>
                </li>
                <li className="blog-sidebar-menu-submenu-item">
                  <a className="blog-sidebar-menu-submenu-link">Доповнення</a>
                </li>
                <li className="blog-sidebar-menu-submenu-item">
                  <a className="blog-sidebar-menu-submenu-link">
                    Оновлення програм
                  </a>
                </li>
                <li className="blog-sidebar-menu-submenu-item">
                  <a className="blog-sidebar-menu-submenu-link">Ресурси</a>
                </li>
              </ul>
            </li>
            <li className="blog-sidebar-menu-item">
              <p className="blog-sidebar-menu-item-title">Теги</p>

              <ul className="blog-sidebar-menu-tags">
                <li className="blog-sidebar-menu-tags-item">
                  <a className="blog-sidebar-menu-tags-link">Ресурси</a>
                </li>
                <li className="blog-sidebar-menu-tags-item">
                  <a className="blog-sidebar-menu-tags-link">Оновлення</a>
                </li>
                <li className="blog-sidebar-menu-tags-item">
                  <a className="blog-sidebar-menu-tags-link">Події</a>
                </li>
                <li className="blog-sidebar-menu-tags-item">
                  <a className="blog-sidebar-menu-tags-link">Доповнення</a>
                </li>
                <li className="blog-sidebar-menu-tags-item">
                  <a className="blog-sidebar-menu-tags-link">Додатки</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="blog-content">
          <ul className="blog-content-list">
            <li className="blog-content-item">
              <h2 className="blog-content-item-title first-title">
                Canja de Galinha нові можливості
              </h2>

              <p className="blog-content-item-date">21.12.2022</p>
              <img className="blog-content-item-image" src={man} />

              <h3 className="blog-content-item-second">
                Створення облікового запису і підписка.
              </h3>

              <p className="blog-content-item-description list-description">
                Щоб приготувати курячі ламники, спіймайте курку, трохи сухарів
                та киплячої олії, і ваша смачна згамка готова! Смачне пряженя
                без жодної насильницької оруди над курками, розігрійте
                сковорідку, додайте кілька яєць,  борошна з молоком, перемішайте
                і смакуйте! Смажені на грані курячі крильця та гомілки з
                улюбленою поливкою відмінно підійдуть для жвавого заходу. Якщо
              </p>

              <button className="blog-content-item-description second-button">
                Читати більше
              </button>
            </li>
            <li className="blog-content-item">
              <h2 className="blog-content-item-title first-title">
                Canja de Galinha нові можливості
              </h2>

              <p className="blog-content-item-date">21.12.2022</p>
              <img className="blog-content-item-image" src={man} />

              <h3 className="blog-content-item-second">
                Створення облікового запису і підписка.
              </h3>

              <p className="blog-content-item-description list-description">
                Щоб приготувати курячі ламники, спіймайте курку, трохи сухарів
                та киплячої олії, і ваша смачна згамка готова! Смачне пряженя
                без жодної насильницької оруди над курками, розігрійте
                сковорідку, додайте кілька яєць,  борошна з молоком, перемішайте
                і смакуйте! Смажені на грані курячі крильця та гомілки з
                улюбленою поливкою відмінно підійдуть для жвавого заходу. Якщо
              </p>

              <button className="blog-content-item-description second-button">
                Читати більше
              </button>
            </li>
            <li className="blog-content-item">
              <h2 className="blog-content-item-title first-title">
                Canja de Galinha нові можливості
              </h2>

              <p className="blog-content-item-date">21.12.2022</p>
              <img className="blog-content-item-image" src={man} />

              <h3 className="blog-content-item-second">
                Створення облікового запису і підписка.
              </h3>

              <p className="blog-content-item-description list-description">
                Щоб приготувати курячі ламники, спіймайте курку, трохи сухарів
                та киплячої олії, і ваша смачна згамка готова! Смачне пряженя
                без жодної насильницької оруди над курками, розігрійте
                сковорідку, додайте кілька яєць,  борошна з молоком, перемішайте
                і смакуйте! Смажені на грані курячі крильця та гомілки з
                улюбленою поливкою відмінно підійдуть для жвавого заходу. Якщо
              </p>

              <button className="blog-content-item-description second-button">
                Читати більше
              </button>
            </li>
          </ul>

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
              <button className="blog-content-pagination-item-button">2</button>
            </li>
            <li className="blog-content-pagination-item">
              <button className="blog-content-pagination-item-button">3</button>
            </li>
            <li className="blog-content-pagination-item">
              <button className="blog-content-pagination-item-button">4</button>
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
  );
};

export default Blog;
