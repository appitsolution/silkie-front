import React, { useState } from "react";
import logo from "../images/logo.svg";
import login from "../images/login.svg";
import { useNavigate, Link, useRoutes, useLocation } from "react-router-dom";
import menu from "../images/pajamas_hamburger.svg";
import close from "../images/maki_cross.svg";
import arrowSprite from "../images/sprite.svg";
import search from "../images/search.svg";

const Header = ({ current = "/" }) => {
  const navigation = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const router = useLocation();
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img className="header-logo-icon" src={logo} />
      </Link>

      <ul className={`header-menu ${isOpenMenu ? "active" : ""}`}>
        <li className="header-menu-item">
          <Link
            to="/"
            className={`header-menu-link ${current === "/" ? "current" : ""}`}
          >
            Головна
          </Link>
        </li>
        <li className="header-menu-item">
          <a className="header-menu-link">Про нас</a>
        </li>
        <li className="header-menu-item">
          <Link
            to="/answer"
            className={`header-menu-link ${
              current === "/answer" ? "current" : ""
            }`}
          >
            Рішення
          </Link>
        </li>
        <li className="header-menu-item">
          <a className="header-menu-link">Форум</a>
        </li>
        <li className="header-menu-item">
          <button
            onClick={({ target }) => {
              if (router.pathname === "/news")
                return target.classList.toggle("active");

              navigation("/news");
            }}
            className={`header-menu-link ${
              current === "/news" ? "current" : ""
            }`}
          >
            Денник
            <svg className="header-menu-link-icon">
              <use href={`${arrowSprite}#ep_arrow-down`}></use>
            </svg>
          </button>
          <div className="header-menu-news-mobile">
            <ul className="header-menu-news-mobile-list">
              <li className="header-menu-news-mobile-item">
                <button
                  className="header-menu-news-mobile-button"
                  onClick={({ target }) => {
                    target.classList.toggle("active");
                  }}
                >
                  Категорії
                  <svg className="header-menu-news-mobile-button-icon">
                    <use href={`${arrowSprite}#ep_arrow-down`}></use>
                  </svg>
                </button>
                <ul className="header-menu-news-mobile-button-submenu">
                  <li className="header-menu-news-mobile-button-submenu-item">
                    <button className="header-menu-news-mobile-button-submenu-button">
                      Новини
                    </button>
                  </li>
                  <li className="header-menu-news-mobile-button-submenu-item">
                    <button className="header-menu-news-mobile-button-submenu-button">
                      Події
                    </button>
                  </li>
                  <li className="header-menu-news-mobile-button-submenu-item">
                    <button className="header-menu-news-mobile-button-submenu-button">
                      Доповнення
                    </button>
                  </li>
                  <li className="header-menu-news-mobile-button-submenu-item">
                    <button className="header-menu-news-mobile-button-submenu-button">
                      Оновлення програм
                    </button>
                  </li>
                  <li className="header-menu-news-mobile-button-submenu-item">
                    <button className="header-menu-news-mobile-button-submenu-button">
                      Ресурси
                    </button>
                  </li>
                </ul>
              </li>
              <li className="header-menu-news-mobile-item">
                <button
                  className="header-menu-news-mobile-button"
                  onClick={({ target }) => {
                    target.classList.toggle("active");
                  }}
                >
                  Архів
                  <svg className="header-menu-news-mobile-button-icon">
                    <use href={`${arrowSprite}#ep_arrow-down`}></use>
                  </svg>
                </button>
                <ul className="header-menu-news-mobile-button-submenu">
                  <li className="header-menu-news-mobile-button-submenu-item">
                    <button className="header-menu-news-mobile-button-submenu-button">
                      Новини
                    </button>
                  </li>
                  <li className="header-menu-news-mobile-button-submenu-item">
                    <button className="header-menu-news-mobile-button-submenu-button">
                      Події
                    </button>
                  </li>
                  <li className="header-menu-news-mobile-button-submenu-item">
                    <button className="header-menu-news-mobile-button-submenu-button">
                      Доповнення
                    </button>
                  </li>
                  <li className="header-menu-news-mobile-button-submenu-item">
                    <button className="header-menu-news-mobile-button-submenu-button">
                      Оновлення програм
                    </button>
                  </li>
                  <li className="header-menu-news-mobile-button-submenu-item">
                    <button className="header-menu-news-mobile-button-submenu-button">
                      Ресурси
                    </button>
                  </li>
                </ul>
              </li>
              <li className="header-menu-news-mobile-item">
                <button className="header-menu-news-mobile-button">Теги</button>
                <ul className="header-menu-news-mobile-tags">
                  <li className="header-menu-news-mobile-tags-item">Ресурси</li>
                  <li className="header-menu-news-mobile-tags-item">
                    Оновлення
                  </li>
                  <li className="header-menu-news-mobile-tags-item">Події</li>
                  <li className="header-menu-news-mobile-tags-item">
                    Доповнення
                  </li>
                  <li className="header-menu-news-mobile-tags-item">Додатки</li>
                </ul>
              </li>
            </ul>

            <label className="header-menu-news-mobile-search">
              <input
                className="header-menu-news-mobile-search-input"
                placeholder="Пошук в категоріях"
              />

              <img
                className="header-menu-news-mobile-search-logo"
                src={search}
              />
            </label>
          </div>
        </li>
      </ul>

      <div className="header-block">
        <div className="header-lang">
          <button className="header-lang-button current">UA</button>|
          <button className="header-lang-button">EN</button>
        </div>

        <button className="header-login">
          вхід <img className="header-login-icon" src={login} />
        </button>

        <button
          className="header-mobile-menu"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          {isOpenMenu ? (
            <img className="header-mobile-menu" src={close} />
          ) : (
            <img className="header-mobile-menu" src={menu} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
