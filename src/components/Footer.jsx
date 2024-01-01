import React from "react";
import logo from "../images/logo-footer.svg";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";
import telegram from "../images/telegram.svg";

import { Link } from "react-router-dom";

const Footer = ({ current = "/" }) => {
  return (
    <footer className="footer">
      <div className="container">
        <a className="footer-privacy-logo-mobile">
          <img className="footer-privacy-logo-icon" src={logo} />
        </a>
        <div className="footer-block">
          <div className="footer-privacy">
            <a className="footer-privacy-logo">
              <img className="footer-privacy-logo-icon" src={logo} />
            </a>
            <div className="footer-privacy-by">
              <p className="footer-privacy-by-text">© 2033</p>
              <p className="footer-privacy-by-text">silkie.pl</p>
              <p className="footer-privacy-by-text">Всі права захищені</p>
            </div>

            <ul className="footer-privacy-social">
              <li className="footer-privacy-social-item">
                <a className="footer-privacy-social-link">
                  <img
                    className="footer-privacy-social-link-icon"
                    src={facebook}
                  />
                </a>
              </li>
              <li className="footer-privacy-social-item">
                <a className="footer-privacy-social-link">
                  <img
                    className="footer-privacy-social-link-icon"
                    src={linkedin}
                  />
                </a>
              </li>
              <li className="footer-privacy-social-item">
                <a className="footer-privacy-social-link">
                  <img
                    className="footer-privacy-social-link-icon"
                    src={telegram}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <div className="footer-flex">
              <div className="footer-feedback">
                <h3 className="footer-feedback-title first-title">
                  Смачне пряженя
                </h3>

                <p className="footer-feedback-description list-description">
                  Смачне пряженя без жодної насильницької оруди над курками,
                  розігрійте сковорідку, додайте кілька яєць,  борошна з
                  молоком, перемішайте і смакуйте!
                </p>

                <div className="footer-privacy-by-mobile">
                  <p className="footer-privacy-by-text">© 2033</p>
                  <p className="footer-privacy-by-text">silkie.pl</p>
                  <p className="footer-privacy-by-text">Всі права захищені</p>
                </div>
              </div>
              <div className="footer-menu">
                <h3 className="footer-menu-title first-title">
                  Корисні посилання
                </h3>

                <div className="footer-menu-block">
                  <ul className="footer-menu-list">
                    <li className="footer-menu-item">
                      <a className="footer-menu-link">Про нас</a>
                    </li>
                    <li className="footer-menu-item">
                      <a className="footer-menu-link">Ціноутворення</a>
                    </li>
                    <li className="footer-menu-item">
                      <a className="footer-menu-link">Що я можу отримати?</a>
                    </li>
                    <li className="footer-menu-item">
                      <Link
                        to="/docs"
                        className={`footer-menu-link ${
                          current === "/docs" ? "current" : ""
                        }`}
                      >
                        База знань
                      </Link>
                    </li>
                    <li className="footer-menu-item">
                      <a className="footer-menu-link">Форум</a>
                    </li>
                  </ul>
                  <ul className="footer-menu-list">
                    <li className="footer-menu-item">
                      <Link
                        to="/rules"
                        className={`footer-menu-link ${
                          current === "/rules" ? "current" : ""
                        }`}
                      >
                        Правила та умови{" "}
                      </Link>
                    </li>
                    <li className="footer-menu-item">
                      <Link
                        to="/privacy"
                        className={`footer-menu-link ${
                          current === "/privacy" ? "current" : ""
                        }`}
                      >
                        Політика конфіденційності
                      </Link>
                    </li>
                    <li className="footer-menu-item">
                      <Link
                        to="/permission"
                        className={`footer-menu-link ${
                          current === "/permission" ? "current" : ""
                        }`}
                      >
                        Згода на обробку персональних даних
                      </Link>
                    </li>
                    <li className="footer-menu-item">
                      <a className="footer-menu-link">
                        Політика використання файлів cookie
                      </a>
                    </li>
                  </ul>

                  <div className="footer-menu-table">
                    <ul className="footer-privacy-social-mobile">
                      <li className="footer-privacy-social-item">
                        <a className="footer-privacy-social-link">
                          <img
                            className="footer-privacy-social-link-icon"
                            src={facebook}
                          />
                        </a>
                      </li>
                      <li className="footer-privacy-social-item">
                        <a className="footer-privacy-social-link">
                          <img
                            className="footer-privacy-social-link-icon"
                            src={linkedin}
                          />
                        </a>
                      </li>
                      <li className="footer-privacy-social-item">
                        <a className="footer-privacy-social-link">
                          <img
                            className="footer-privacy-social-link-icon"
                            src={telegram}
                          />
                        </a>
                      </li>
                    </ul>
                    <div className="footer-privacy-by">
                      <p className="footer-privacy-by-text">© 2033</p>
                      <p className="footer-privacy-by-text">silkie.pl</p>
                      <p className="footer-privacy-by-text">
                        Всі права захищені
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-feedback-flex">
              <div className="footer-feedback-email">
                <p className="footer-feedback-email-head">
                  Дізнайся першим про новинки та пропозиції
                </p>

                <label className="footer-feedback-email-label">
                  <input
                    type="text"
                    className="footer-feedback-email-label-input"
                    placeholder="E-mail"
                  />
                  <button className="footer-feedback-email-label-button first-button">
                    Підписатись
                  </button>
                </label>
              </div>
              <div className="footer-menu-lang">
                <div className="footer-privacy-by mobile-hidden">
                  <p className="footer-privacy-by-text">© 2033</p>
                  <p className="footer-privacy-by-text">silkie.pl</p>
                  <p className="footer-privacy-by-text">Всі права захищені</p>
                </div>
                <div className="footer-menu-lang-block">
                  <p className="footer-menu-lang-text">Обрати мову сайту</p>
                  <div className="footer-menu-lang-buttons">
                    <button className="footer-menu-lang-button current">
                      Ua
                    </button>
                    <p className="footer-menu-lang-decor">|</p>
                    <button className="footer-menu-lang-button">En</button>
                  </div>
                </div>
                <ul className="footer-privacy-social-mobile table-hidden">
                  <li className="footer-privacy-social-item">
                    <a className="footer-privacy-social-link">
                      <img
                        className="footer-privacy-social-link-icon"
                        src={facebook}
                      />
                    </a>
                  </li>
                  <li className="footer-privacy-social-item">
                    <a className="footer-privacy-social-link">
                      <img
                        className="footer-privacy-social-link-icon"
                        src={linkedin}
                      />
                    </a>
                  </li>
                  <li className="footer-privacy-social-item">
                    <a className="footer-privacy-social-link">
                      <img
                        className="footer-privacy-social-link-icon"
                        src={telegram}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
