import React from "react";
import image from "../../../images/plugin/3.1.png";
import arrow from "../../../images/arrow-button-swiper.svg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className="plugin-next" onClick={() => swiper.slideNext()}>
      <img className="plugin-next-icon" src={arrow} />
    </button>
  );
};

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button className="plugin-prev" onClick={() => swiper.slidePrev()}>
      <img className="plugin-prev-icon" src={arrow} />
    </button>
  );
};

function Plugin() {
  return (
    <section className="plugin">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperButtonPrev />
        <SwiperButtonNext />
        <SwiperSlide>
          <div className="plugin-block">
            <div className="plugin-image">
              <div className="plugin-image-hidden">
                <img className="plugin-image-img" src={image} />
              </div>
              <div className="plugin-image-decor">
                <p className="plugin-image-decor-title">
                  10<sub>+</sub>
                </p>
                <p className="plugin-image-decor-second">Можливостей</p>
              </div>
            </div>

            <div className="plugin-content">
              <h3 className="plugin-content-second second-title">Застосунок</h3>
              <h4 className="plugin-content-title first-title">
                Chicken Nuggets
              </h4>
              <h4 className="plugin-content-three first-title">
                For Adobe Photoshop
              </h4>

              <p className="plugin-content-description description">
                Надавайте перевагу важлівішим справам, доки застосунок продовжує
                виконувати свій труд навіть у тловому ладі.{" "}
              </p>
              <p className="plugin-content-note list-description">
                Завдяки чувно зрозумілій оболонці, опанувати застосунк дуже
                легко - незалежно від вашого рівня володіння Adobe Photoshop.{" "}
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="plugin-block">
            <div className="plugin-image">
              <div className="plugin-image-hidden">
                <img className="plugin-image-img" src={image} />
              </div>
              <div className="plugin-image-decor">
                <p className="plugin-image-decor-title">
                  10<sub>+</sub>
                </p>
                <p className="plugin-image-decor-second">Можливостей</p>
              </div>
            </div>

            <div className="plugin-content">
              <h3 className="plugin-content-second second-title">Застосунок</h3>
              <h4 className="plugin-content-title first-title">
                Chicken Nuggets
              </h4>
              <h4 className="plugin-content-three first-title">
                For Adobe Photoshop
              </h4>

              <p className="plugin-content-description description">
                Надавайте перевагу важлівішим справам, доки застосунок продовжує
                виконувати свій труд навіть у тловому ладі.{" "}
              </p>
              <p className="plugin-content-note list-description">
                Завдяки чувно зрозумілій оболонці, опанувати застосунк дуже
                легко - незалежно від вашого рівня володіння Adobe Photoshop.{" "}
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
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Plugin;
