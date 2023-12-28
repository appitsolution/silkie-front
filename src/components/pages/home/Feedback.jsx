import React from "react";
import feedback1 from "../../../images/feedback/image2.jpg";
import feedback2 from "../../../images/feedback/image1.jpg";

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="feedback-block">
        <h3 className="feedback-second second-title">Про нас говорять</h3>
        <h2 className="feedback-title first-title">відгуки наших клієнтів</h2>
        <div className="feedback-background">
          <div className="container">
            <ul className="feedback-list">
              <li className="feedback-item">
                <div className="feedback-item-head">
                  <img className="feedback-item-head-image" src={feedback1} />
                  <div className="feedback-item-head-text">
                    <h4 className="feedback-item-head-text-title description">
                      Антон Руденко
                    </h4>
                    <p className="feedback-item-head-text-service second-title">
                      Вказати посаду
                    </p>
                  </div>
                </div>
                <p className="feedback-item-description list-description">
                  Смачне пряженя без жодної насильницької оруди над курками,
                  розігрійте сковорідку, додайте кілька яєць,  борошна з
                  молоком, перемішайте і смакуйте! Смажені на грані курячі
                  крильця та гомілки.
                </p>

                <p className="feedback-item-date">24.12.2024</p>
              </li>
              <li className="feedback-item">
                <div className="feedback-item-head">
                  <img className="feedback-item-head-image" src={feedback2} />
                  <div className="feedback-item-head-text">
                    <h4 className="feedback-item-head-text-title description">
                      Ангеліна Сміт
                    </h4>
                    <p className="feedback-item-head-text-service second-title">
                      Вказати посаду
                    </p>
                  </div>
                </div>
                <p className="feedback-item-description list-description">
                  Смачне пряженя без жодної насильницької оруди над курками,
                  розігрійте сковорідку, додайте кілька яєць,  борошна з
                  молоком, перемішайте і смакуйте! Смажені на грані курячі
                  крильця та гомілки.
                </p>
                <p className="feedback-item-date">24.12.2024</p>
              </li>
              <li className="feedback-item">
                <div className="feedback-item-head">
                  <img className="feedback-item-head-image" src={feedback2} />
                  <div className="feedback-item-head-text">
                    <h4 className="feedback-item-head-text-title description">
                      Ангеліна Сміт
                    </h4>
                    <p className="feedback-item-head-text-service second-title">
                      Вказати посаду
                    </p>
                  </div>
                </div>
                <p className="feedback-item-description list-description">
                  Смачне пряженя без жодної насильницької оруди над курками,
                  розігрійте сковорідку, додайте кілька яєць,  борошна з
                  молоком, перемішайте і смакуйте! Смажені на грані курячі
                  крильця та гомілки.
                </p>
                <p className="feedback-item-date">24.12.2024</p>
              </li>
              <li className="feedback-item">
                <div className="feedback-item-head">
                  <img className="feedback-item-head-image" src={feedback2} />
                  <div className="feedback-item-head-text">
                    <h4 className="feedback-item-head-text-title description">
                      Ангеліна Сміт
                    </h4>
                    <p className="feedback-item-head-text-service second-title">
                      Вказати посаду
                    </p>
                  </div>
                </div>
                <p className="feedback-item-description list-description">
                  Смачне пряженя без жодної насильницької оруди над курками,
                  розігрійте сковорідку, додайте кілька яєць,  борошна з
                  молоком, перемішайте і смакуйте! Смажені на грані курячі
                  крильця та гомілки.
                </p>
                <p className="feedback-item-date">24.12.2024</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
