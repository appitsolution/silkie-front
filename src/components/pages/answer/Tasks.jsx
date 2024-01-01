import React from "react";
import tasks1 from "../../../images/tasks/image1.jpg";
import tasks2 from "../../../images/tasks/image2.jpg";
import tasks3 from "../../../images/tasks/image3.jpg";
import tasks4 from "../../../images/tasks/image4.jpg";

const Tasks = () => {
  return (
    <section className="tasks">
      <div className="container">
        <div className="tasks-block">
          <h2 className="tasks-title first-title">Завдання Chicken Nuggets</h2>
          <p className="tasks-description description">
            При розробці ми завжди дотримуємося простих правил, які визначають
            можливості нашого застосунку.
          </p>

          <ul className="tasks-list">
            <li className="tasks-item">
              <h3 className="tasks-item-title second-title">
                Саморушити перебіги
              </h3>
              <img className="tasks-item-image" src={tasks1} />
              <p className="tasks-item-description list-description">
                Вражаючий добір знадобів дозволяє саморушити прикладно будь-які
                додрукарські перебіги.
              </p>
            </li>{" "}
            <li className="tasks-item">
              <h3 className="tasks-item-title second-title">
                Виправлення помилок
              </h3>
              <img className="tasks-item-image" src={tasks2} />
              <p className="tasks-item-description list-description">
                Вражаючий добір знадобів дозволяє саморушити прикладно будь-які
                додрукарські перебіги.
              </p>
            </li>
            <li className="tasks-item">
              <h3 className="tasks-item-title second-title">
                Легкість у використанні
              </h3>
              <img className="tasks-item-image" src={tasks3} />
              <p className="tasks-item-description list-description">
                Вражаючий добір знадобів дозволяє саморушити прикладно будь-які
                додрукарські перебіги.
              </p>
            </li>
            <li className="tasks-item">
              <h3 className="tasks-item-title second-title">Ощадність часу</h3>
              <img className="tasks-item-image" src={tasks4} />
              <p className="tasks-item-description list-description">
                Вражаючий добір знадобів дозволяє саморушити прикладно будь-які
                додрукарські перебіги.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
