import React from "react";
import { ButtonAdd } from "../../../../../shared/components/ButtonAdd";
import "./style.css";

export const Indexes = ({ sum, totalSum, sumCost, totalCost, isOpen }) => {
  return (
    <div className="bottom-container">
      <div className="total-index">
        <div>
          <h3 className="index-one">Total</h3>
          <h3 className="index-all">All project</h3>
        </div>
        <div style={{ width: "75px" }}>
          <p className="index-one">{sum}</p>
          <p className="index-all">{totalSum}</p>
        </div>
        <div style={{ width: "49px" }}>
          <p className="index-one">${sumCost}</p>
          <p className="index-all">${totalCost}</p>
        </div>
      </div>

      <ButtonAdd onClick={isOpen} Children={"+Add new row"} />
    </div>
  );
};
