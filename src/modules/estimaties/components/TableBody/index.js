import React from "react";
import { Row } from "../Row";
export const TableBody = ({ tasks, cost }) => {
  return (
    <>
      <tbody>
        {tasks.map((item) => (
          <Row cost={cost} item={item} />
        ))}
      </tbody>
    </>
  );
};
