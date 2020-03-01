import React, { useState } from "react";
import PropTypes from 'prop-types';
import "../styles/PopUp.css";

function PopUp({ togglePopUp, addStudent }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const handleInput = () => {
    addStudent(name.trim(), rating);
  };

  return (
    <div className="popup">
      <div className="popup_inner">
        <button className="btn red darken-4" onClick={togglePopUp}>
          закрыть
        </button>
        <h4>Добавить запись</h4>

        <div>
          <label>
            Введите фамилию и имя:&nbsp;
            <input
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="Фамилия, Имя"
            />
          </label>
        </div>
        <div>
          <label>
            Введите рейтинг:&nbsp;
            <input
              type="number"
              min="0"
              max="100"
              value={rating}
              onChange={event => setRating(event.target.value)}
              placeholder="Рейтинг (0-100)"
            />
          </label>

          {name.trim() && rating && rating >= 0 && rating <= 100 && (
            <button className="btn" onClick={handleInput}>
              Добавить рейтинг
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PopUp;

PopUp.propTypes = {
  togglePopUp: PropTypes.func.isRequired,
  addStudent: PropTypes.func.isRequired,
};
