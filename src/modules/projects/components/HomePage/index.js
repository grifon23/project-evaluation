import React, { useState } from "react";
import { ButtonAdd } from "../../../../shared";
import { CardList, ModalAddCard } from "../../components";
import "./styles.css";
export const HomePage = ({ cards }) => {
  const [modalCard, setModalCard] = useState(false);
  const isOpen = () => {
    setModalCard(true);
  };
  const isClose = () => {
    setModalCard(false);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <h1 className="title-page">Dashboard</h1>
      </div>
      <div className="table-board">
        <CardList cards={cards} />
        <div style={{ minWidth: "177px" }}>
          <ButtonAdd onClick={isOpen} Children={"+Add new project"} />
        </div>
      </div>

      <ModalAddCard isClose={isClose} modalCard={modalCard} />
    </div>
  );
};
