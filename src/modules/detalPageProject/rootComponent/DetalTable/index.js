import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { ModalAddTask, Table, Indexes } from "../../table/components";

export const DetalTable = ({ cards }) => {
  const { title } = useParams();
  const card = cards.find((item) => item.title === title);
  const { id } = card;
  const { tasks } = useSelector((state) => state.tasks);
  const cardTasks = tasks.filter((task) => task.cardId === id);
  const [isModal, setIsModal] = useState(false);
  const isOpen = () => {
    setIsModal(true);
  };
  const isClose = () => {
    setIsModal(false);
  };

  const sumAverageHourOneProject = cardTasks.reduce(
    (sum, item) => sum + (Number(item.hourMin) + Number(item.hourMax)) / 2,
    0
  );

  const sumAverageHourAllProject = tasks.reduce(
    (sum, item) => sum + (Number(item.hourMin) + Number(item.hourMax)) / 2,
    0
  );

  const sumCostOneProject = cardTasks.reduce(
    (sum, item) => sum + Number(item.cost),
    0
  );
  const totalCost = tasks.reduce((sum, item) => sum + Number(item.cost), 0);

  return (
    <div key={id}>
      <h1 className="title-page">{card.title}</h1>
      <Table tasks={cardTasks} />
      <Indexes
        isOpen={isOpen}
        sum={sumAverageHourOneProject}
        totalCost={totalCost}
        sumCost={sumCostOneProject}
        totalSum={sumAverageHourAllProject}
      />
      <ModalAddTask
        cardCost={card.cost}
        isModal={isModal}
        cardId={id}
        isClose={isClose}
      />
    </div>
  );
};
