import React from "react";
import logo from "../images/logo.svg";
import login from "../images/login.svg";

const Header = () => {
  return (
    <header className="header">
      <a className="header-logo">
        <img className="header-logo-icon" src={logo} />
      </a>

      <ul className="header-menu">
        <li className="header-menu-item">
          <a className="header-menu-link">Головна</a>
        </li>
        <li className="header-menu-item">
          <a className="header-menu-link">Про нас</a>
        </li>
        <li className="header-menu-item">
          <a className="header-menu-link">Рішення</a>
        </li>
        <li className="header-menu-item">
          <a className="header-menu-link">Денник</a>
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
      </div>
    </header>
  );
};

export default Header;
