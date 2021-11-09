import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../../../store/cards/actions";
import "./style.css";
import { ButtonAdd } from "../../../../shared";

export const ModalAddCard = ({ modalCard, isClose }) => {
  const [input, setInput] = useState("");
  const [numbHour, setNumbHour] = useState(null);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleNumbHour = (e) => {
    setNumbHour(e.target.value);
  };

  const newCardProject = () => {
    if (input !== "" && Number(numbHour) >= 0) {
      dispatch(
        addCard({
          title: input,
          cost: numbHour,
        })
      );
    } else if (Number(numbHour) < 0) {
      alert("Значение не верно");
    } else {
      alert("Введите имя проекта");
    }
    setNumbHour("");
    setInput("");
    isClose();
  };

  return (
    <div onClick={isClose} className={modalCard ? "modal active" : "modal"}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__container"
      >
        <div>
          <h2 className="modal__title">New Project</h2>
          <h3 className="name-project">Title</h3>
          <input
            value={input}
            onChange={handleInput}
            className="modal__input"
            placeholder="Enter name project"
            type="text"
          />
          <h3 className="name-project">Price for one hour</h3>
          <input
            value={numbHour}
            onChange={handleNumbHour}
            className="modal__input"
            type="number"
            placeholder="Enter number here"
          />
          <div className="btn-container">
            <ButtonAdd onClick={newCardProject} Children={"Ok"} />
            <ButtonAdd onClick={isClose} Children={"Cancel"} />
          </div>
        </div>
      </div>
    </div>
  );
};
