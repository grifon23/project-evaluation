import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../../../../../store/cards/actions";
import { BtnCheck, BtnDel, BtnApp } from "../../../../../shared";
import { Total } from "../Total";
import "./style.css";
import { Link } from "react-router-dom";
export const Card = ({ card }) => {
  const { id, date } = card;
  const { tasks } = useSelector((state) => state.tasks);
  const cardTasksId = tasks.filter((task) => task.cardId === id);

  const sumCostOneProject = cardTasksId.reduce(
    (sum, item) => sum + Number(item.cost),
    0
  );

  const sumAvarageOneProject = cardTasksId.reduce(
    (sum, item) => sum + (Number(item.hourMin) + Number(item.hourMax)) / 2,
    0
  );

  const dispatch = useDispatch();
  const delCardProject = (e) => {
    dispatch(removeCard({ id }));
    e.stopPropagation();
  };

  return (
    <div className="card">
      <div className="header-card">
        <h2 className="title">{card.title}</h2>
        <div style={{ display: "flex" }}>
          <BtnCheck />
          <BtnDel onClick={delCardProject} id={card.id} />
        </div>
      </div>

      <Link to={`/project/${card.title}`}>
        <Total
          currDate={date}
          sumAvarageOneProject={sumAvarageOneProject}
          sumCostOneProject={sumCostOneProject}
        />
        <BtnApp />
      </Link>
    </div>
  );
};
