import React from "react";
import product1 from "../../../images/product/image-1.jpg";
import product2 from "../../../images/product/image-2.jpg";
import product3 from "../../../images/product/image-3.jpg";

const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="product-block">
          <div className="product-content">
            <h3 className="product-content-second second-title">продукт</h3>
            <h2 className="product-content-title first-title">
              Розумні рішення
            </h2>

            <p className="product-content-description description">
              Ми вважаємо, що майже всю додрукарську підготовку, пов'язану з
              цифровим та широкоформатним друкуванням, можна значно спростити.{" "}
            </p>

            <ul className="product-content-list">
              <li className="product-content-item">
                <img className="product-content-item-image" />
                <div className="product-content-item-info">
                  <h4 className="product-content-item-info-title list-title">
                    Розумні рішення
                  </h4>
                  <p className="product-content-item-info-description list-description">
                    Більшість додрукарських перебігів автоматизувати за
                    допомогою наших цифрових рішень.
                  </p>
                </div>
              </li>
              <li className="product-content-item">
                <img className="product-content-item-image" />
                <div className="product-content-item-info">
                  <h4 className="product-content-item-info-title list-title">
                    Розумні рішення
                  </h4>
                  <p className="product-content-item-info-description list-description">
                    Більшість додрукарських перебігів автоматизувати за
                    допомогою наших цифрових рішень.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="product-images">
            <div className="product-images-first">
              <img className="product-images-first-img" src={product2} />
              <img className="product-images-first-img" src={product3} />
            </div>
            <div className="product-images-second">
              <img className="product-images-second-img" src={product1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
