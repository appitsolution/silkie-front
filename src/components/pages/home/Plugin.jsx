import React from "react";
import image from "../../../images/plugin/3.1.png";

const Plugin = () => {
  return (
    <section className="plugin">
      <div className="plugin-block">
        <div className="plugin-image">
          <img className="plugin-image-img" src={image} />
          <div className="plugin-image-decor">
            <p className="plugin-image-decor-title">
              10<sub>+</sub>
            </p>
            <p className="plugin-image-decor-second">Можливостей</p>
          </div>
        </div>

        <div className="plugin-content">
          <h3 className="plugin-content-second second-title">Застосунок</h3>
          <h4 className="plugin-content-title first-title">Chicken Nuggets</h4>
          <h4 className="plugin-content-three first-title">
            For Adobe Photoshop
          </h4>

          <p className="plugin-content-description description">
            Надавайте перевагу важлівішим справам, доки застосунок продовжує
            виконувати свій труд навіть у тловому ладі.{" "}
          </p>
          <p className="plugin-content-note list-description">
            Завдяки чувно зрозумілій оболонці, опанувати застосунк дуже легко -
            незалежно від вашого рівня володіння Adobe Photoshop.{" "}
          </p>
          <div className="plugin-content-buttons">
            <button className="plugin-content-buy first-button">
              Придбати підписку
            </button>
            <button className="plugin-content-more second-button">
              Читати більше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plugin;
