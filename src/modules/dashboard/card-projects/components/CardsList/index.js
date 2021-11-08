import React from "react";
import { Card } from "../Card";
import "./style.css";
export const CardList = ({ cards }) => {
  return (
    <ul className="list">
      {cards.map((card) => (
        <li className="item">
          <Card key={card.id} card={card} />
        </li>
      ))}
    </ul>
  );
};
