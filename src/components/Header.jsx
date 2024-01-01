import React, { useState } from "react";
import logo from "../images/logo.svg";
import login from "../images/login.svg";
import { useNavigate, Link } from "react-router-dom";
import menu from "../images/pajamas_hamburger.svg";
import close from "../images/maki_cross.svg";
import arrowSprite from "../images/sprite.svg";

const Header = ({ current = "/" }) => {
  const navigation = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="header">
      <a className="header-logo">
        <img className="header-logo-icon" src={logo} />
      </a>

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
          <Link
            to="/news"
            className={`header-menu-link ${
              current === "/news" ? "current" : ""
            }`}
          >
            Денник
          </Link>
        </li>
        <li className="header-menu-item">
          <a className="header-menu-link">Форум</a>
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
