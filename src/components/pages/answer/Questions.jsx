import React, { useRef } from "react";
import arrow from "../../../images/sprite-arrow-right.svg";

const Questions = () => {
  const questionEl = useRef(null);

  const openQuestion = ({ target }) => {
    if (target.classList.contains("active")) {
      target.classList.remove("active");
    } else {
      questionEl.current.childNodes.forEach((item) => {
        item.firstChild.classList.remove("active");
      });
      target.classList.add("active");
    }
  };
  return (
    <section className="questions">
      <div className="container">
        <h2 className="questions-title first-title">
          Відповімо на всі питання
        </h2>
        <div className="questions-block">
          <div className="questions-head">
            <ul className="questions-head-list" ref={questionEl}>
              <li className="questions-head-item">
                <button
                  className="questions-head-item-button"
                  onClick={openQuestion}
                >
                  01. Смачне пряженя без жодної насильницької оруди ?
                  <svg className="questions-head-item-button-icon">
                    <use href={`${arrow}#arrow-right`}></use>
                  </svg>
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
                <button
                  className="questions-head-item-button"
                  onClick={openQuestion}
                >
                  02. Смачне пряженя без жодної насильницької оруди ?
                  <svg className="questions-head-item-button-icon">
                    <use href={`${arrow}#arrow-right`}></use>
                  </svg>
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
                <button
                  className="questions-head-item-button"
                  onClick={openQuestion}
                >
                  03. Смачне пряженя без жодної насильницької оруди над курками,
                  розігрійте сковорідку?
                  <svg className="questions-head-item-button-icon">
                    <use href={`${arrow}#arrow-right`}></use>
                  </svg>
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
                <button
                  className="questions-head-item-button"
                  onClick={openQuestion}
                >
                  04. Смачне пряженя без жодної насильницької оруди ?
                  <svg className="questions-head-item-button-icon">
                    <use href={`${arrow}#arrow-right`}></use>
                  </svg>
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
                <button
                  className="questions-head-item-button"
                  onClick={openQuestion}
                >
                  05. Смачне пряженя без жодної насильницької оруди ?
                  <svg className="questions-head-item-button-icon">
                    <use href={`${arrow}#arrow-right`}></use>
                  </svg>
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
                <button
                  className="questions-head-item-button"
                  onClick={openQuestion}
                >
                  06. Смачне пряженя без жодної насильницької оруди ?
                  <svg className="questions-head-item-button-icon">
                    <use href={`${arrow}#arrow-right`}></use>
                  </svg>
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
