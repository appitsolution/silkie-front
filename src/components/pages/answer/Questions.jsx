import React from "react";
import arrow from "../../../images/arrow-right.svg";

const Questions = () => {
  return (
    <section className="questions">
      <div className="container">
        <h2 className="questions-title first-title">
          Відповімо на всі питання
        </h2>
        <div className="questions-block">
          <div className="questions-head">
            <ul className="questions-head-list">
              <li className="questions-head-item">
                <button className="questions-head-item-button">
                  01. Смачне пряженя без жодної насильницької оруди ?
                  <img
                    className="questions-head-item-button-icon"
                    src={arrow}
                  />
                </button>
                <p className="questions-body-text">
                  Надавайте перевагу важлівішим справам, доки застосунок
                  продовжує виконувати свій труд навіть у тловому ладі. Завдяки
                  чувно зрозумілій оболонці, опанувати застосунк дуже легко -
                  незалежно від вашого рівня володіння Adobe Photoshop.
                  <br />
                  <br />
                  Надавайте перевагу важлівішим справам, доки застосунок
                  продовжує виконувати свій труд навіть у тловому ладі. Завдяки
                  чувно зрозумілій оболонці, опанувати застосунк дуже легко -
                  незалежно від вашого рівня володіння Adobe Photoshop.
                </p>
              </li>
              <li className="questions-head-item">
                <button className="questions-head-item-button">
                  02. Смачне пряженя без жодної насильницької оруди ?
                  <img
                    className="questions-head-item-button-icon"
                    src={arrow}
                  />
                </button>
              </li>
              <li className="questions-head-item">
                <button className="questions-head-item-button">
                  03. Смачне пряженя без жодної насильницької оруди над курками,
                  розігрійте сковорідку?
                  <img
                    className="questions-head-item-button-icon"
                    src={arrow}
                  />
                </button>
              </li>
              <li className="questions-head-item">
                <button className="questions-head-item-button">
                  04. Смачне пряженя без жодної насильницької оруди ?
                  <img
                    className="questions-head-item-button-icon"
                    src={arrow}
                  />
                </button>
              </li>
              <li className="questions-head-item">
                <button className="questions-head-item-button">
                  05. Смачне пряженя без жодної насильницької оруди ?
                  <img
                    className="questions-head-item-button-icon"
                    src={arrow}
                  />
                </button>
              </li>
              <li className="questions-head-item">
                <button className="questions-head-item-button">
                  06. Смачне пряженя без жодної насильницької оруди ?
                  <img
                    className="questions-head-item-button-icon"
                    src={arrow}
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
