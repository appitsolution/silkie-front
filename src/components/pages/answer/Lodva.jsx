import React, { useState } from "react";
import lodva1 from "../../../images/lodva/1.png";
import lodva2 from "../../../images/lodva/2.png";
import lodva3 from "../../../images/lodva/3.png";
import lodva4 from "../../../images/lodva/4.png";
import lodva5 from "../../../images/lodva/5.png";
import lodva6 from "../../../images/lodva/6.png";
import lodva7 from "../../../images/lodva/7.png";
import lodva8 from "../../../images/lodva/8.png";
import lodva9 from "../../../images/lodva/9.png";
import lodva10 from "../../../images/lodva/10.png";
import lodva11 from "../../../images/lodva/11.png";

const Lodva = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [data] = useState([
    {
      title: "Відтвір усталено",
      description: ` Це лодва, за допомогою якої можна довести до єдиного
        знаменника вимог друкарні кожен особисто впоряджений відтвір
        та як наслідок - завжди отримувати його належним чином
        впорядженим до друку.`,
      list: [
        "Знадоби вивіряти відтвіри на збіг згідно вимог друкарні.",
        "  Труд з полотном та зображенням, як окремо, так і опоруч.",
      ],
      image: lodva1,
    },
    {
      title: "Відтвір усталено",
      description: ` Це лодва, за допомогою якої можна довести до єдиного
          знаменника вимог друкарні кожен особисто впоряджений відтвір
          та як наслідок - завжди отримувати його належним чином
          впорядженим до друку.`,
      list: [
        "Знадоби вивіряти відтвіри на збіг згідно вимог друкарні.",
        "  Труд з полотном та зображенням, як окремо, так і опоруч.",
      ],
      image: lodva2,
    },
    {
      title: "Відтвір усталено",
      description: ` Це лодва, за допомогою якої можна довести до єдиного
          знаменника вимог друкарні кожен особисто впоряджений відтвір
          та як наслідок - завжди отримувати його належним чином
          впорядженим до друку.`,
      list: [
        "Знадоби вивіряти відтвіри на збіг згідно вимог друкарні.",
        "  Труд з полотном та зображенням, як окремо, так і опоруч.",
      ],
      image: lodva3,
    },
    {
      title: "Відтвір усталено",
      description: ` Це лодва, за допомогою якої можна довести до єдиного
          знаменника вимог друкарні кожен особисто впоряджений відтвір
          та як наслідок - завжди отримувати його належним чином
          впорядженим до друку.`,
      list: [
        "Знадоби вивіряти відтвіри на збіг згідно вимог друкарні.",
        "  Труд з полотном та зображенням, як окремо, так і опоруч.",
      ],
      image: lodva4,
    },
    {
      title: "Відтвір усталено",
      description: ` Це лодва, за допомогою якої можна довести до єдиного
          знаменника вимог друкарні кожен особисто впоряджений відтвір
          та як наслідок - завжди отримувати його належним чином
          впорядженим до друку.`,
      list: [
        "Знадоби вивіряти відтвіри на збіг згідно вимог друкарні.",
        "  Труд з полотном та зображенням, як окремо, так і опоруч.",
      ],
      image: lodva5,
    },
    {
      title: "Відтвір усталено",
      description: ` Це лодва, за допомогою якої можна довести до єдиного
          знаменника вимог друкарні кожен особисто впоряджений відтвір
          та як наслідок - завжди отримувати його належним чином
          впорядженим до друку.`,
      list: [
        "Знадоби вивіряти відтвіри на збіг згідно вимог друкарні.",
        "  Труд з полотном та зображенням, як окремо, так і опоруч.",
      ],
      image: lodva6,
    },
    {
      title: "Відтвір усталено",
      description: ` Це лодва, за допомогою якої можна довести до єдиного
          знаменника вимог друкарні кожен особисто впоряджений відтвір
          та як наслідок - завжди отримувати його належним чином
          впорядженим до друку.`,
      list: [
        "Знадоби вивіряти відтвіри на збіг згідно вимог друкарні.",
        "  Труд з полотном та зображенням, як окремо, так і опоруч.",
      ],
      image: lodva7,
    },
    {
      title: "Відтвір усталено",
      description: ` Це лодва, за допомогою якої можна довести до єдиного
          знаменника вимог друкарні кожен особисто впоряджений відтвір
          та як наслідок - завжди отримувати його належним чином
          впорядженим до друку.`,
      list: [
        "Знадоби вивіряти відтвіри на збіг згідно вимог друкарні.",
        "  Труд з полотном та зображенням, як окремо, так і опоруч.",
      ],
      image: lodva8,
    },
    {
      title: "Відтвір усталено",
      description: ` Це лодва, за допомогою якої можна довести до єдиного
          знаменника вимог друкарні кожен особисто впоряджений відтвір
          та як наслідок - завжди отримувати його належним чином
          впорядженим до друку.`,
      list: [
        "Знадоби вивіряти відтвіри на збіг згідно вимог друкарні.",
        "  Труд з полотном та зображенням, як окремо, так і опоруч.",
      ],
      image: lodva9,
    },
    {
      title: "Відтвір усталено",
      description: ` Це лодва, за допомогою якої можна довести до єдиного
          знаменника вимог друкарні кожен особисто впоряджений відтвір
          та як наслідок - завжди отримувати його належним чином
          впорядженим до друку.`,
      list: [
        "Знадоби вивіряти відтвіри на збіг згідно вимог друкарні.",
        "  Труд з полотном та зображенням, як окремо, так і опоруч.",
      ],
      image: lodva10,
    },
    {
      title: "Відтвір усталено",
      description: ` Це лодва, за допомогою якої можна довести до єдиного
          знаменника вимог друкарні кожен особисто впоряджений відтвір
          та як наслідок - завжди отримувати його належним чином
          впорядженим до друку.`,
      list: [
        "Знадоби вивіряти відтвіри на збіг згідно вимог друкарні.",
        "  Труд з полотном та зображенням, як окремо, так і опоруч.",
      ],
      image: lodva11,
    },
  ]);

  return (
    <section className="lodva">
      <div className="container">
        <div className="lodva-block">
          <div className="lodva-select">
            <ul className="lodva-select-list">
              <li className="lodva-select-item">
                <button
                  className={`lodva-select-button ${
                    currentSlide === 1 ? "current" : ""
                  }`}
                  onClick={() => setCurrentSlide(1)}
                >
                  Відтвір усталено
                </button>
              </li>
              <li className="lodva-select-item">
                <button
                  className={`lodva-select-button ${
                    currentSlide === 2 ? "current" : ""
                  }`}
                  onClick={() => setCurrentSlide(2)}
                >
                  Два боки
                </button>
              </li>
              <li className="lodva-select-item">
                <button
                  className={`lodva-select-button ${
                    currentSlide === 3 ? "current" : ""
                  }`}
                  onClick={() => setCurrentSlide(3)}
                >
                  плашковий канал
                </button>
              </li>
              <li className="lodva-select-item">
                <button
                  className={`lodva-select-button ${
                    currentSlide === 4 ? "current" : ""
                  }`}
                  onClick={() => setCurrentSlide(4)}
                >
                  Зміна зображення
                </button>
              </li>
              <li className="lodva-select-item">
                <button
                  className={`lodva-select-button ${
                    currentSlide === 5 ? "current" : ""
                  }`}
                  onClick={() => setCurrentSlide(5)}
                >
                  Нарізач
                </button>
              </li>
              <li className="lodva-select-item">
                <button
                  className={`lodva-select-button ${
                    currentSlide === 6 ? "current" : ""
                  }`}
                  onClick={() => setCurrentSlide(6)}
                >
                  Підпис відтвора
                </button>
              </li>
              <li className="lodva-select-item">
                <button
                  className={`lodva-select-button ${
                    currentSlide === 7 ? "current" : ""
                  }`}
                  onClick={() => setCurrentSlide(7)}
                >
                  Вушка
                </button>
              </li>
              <li className="lodva-select-item">
                <button
                  className={`lodva-select-button ${
                    currentSlide === 8 ? "current" : ""
                  }`}
                  onClick={() => setCurrentSlide(8)}
                >
                  Сколення
                </button>
              </li>
              <li className="lodva-select-item">
                <button
                  className={`lodva-select-button ${
                    currentSlide === 9 ? "current" : ""
                  }`}
                  onClick={() => setCurrentSlide(9)}
                >
                  Складання лодв
                </button>
              </li>
              <li className="lodva-select-item">
                <button
                  className={`lodva-select-button ${
                    currentSlide === 10 ? "current" : ""
                  }`}
                  onClick={() => setCurrentSlide(10)}
                >
                  доробка
                </button>
              </li>
              <li className="lodva-select-item">
                <button
                  className={`lodva-select-button ${
                    currentSlide === 11 ? "current" : ""
                  }`}
                  onClick={() => setCurrentSlide(11)}
                >
                  Оціглення переліку
                </button>
              </li>
            </ul>
          </div>
          <div className="lodva-content">
            <div className="lodva-content-image">
              <img
                className="lodva-content-image-img"
                src={data[currentSlide - 1].image}
              />
            </div>
            <div className="lodva-content-block">
              <div className="lodva-content-text">
                <h2 className="lodva-content-text-title">
                  {data[currentSlide - 1].title}
                </h2>
                <p className="lodva-content-text-description description">
                  {data[currentSlide - 1].description}
                </p>

                <ul className="lodva-content-text-list">
                  {data[currentSlide - 1].list.map((item) => (
                    <li className="lodva-content-text-item">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="lodva-content-progress">
                <p className="lodva-content-progress-first">{currentSlide}</p>
                <div className="lodva-content-progress-decor">
                  <div
                    className="lodva-content-progress-decor-line"
                    style={{ width: `${(currentSlide * 100) / data.length}%` }}
                  ></div>
                </div>
                <p className="lodva-content-progress-last">
                  {data.length === currentSlide
                    ? data.length
                    : currentSlide + 1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lodva;
