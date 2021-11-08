import React from "react";
import "./style.css";
export const Total = ({
  sumCostOneProject,
  sumAvarageOneProject,
  currDate,
}) => {
  return (
    <div className="total-container">
      <div style={{ display: "flex" }}>
        <div>
          <h3 className="total-title right">Total hour</h3>
          <p className="total-value right">{sumAvarageOneProject} h.</p>
        </div>
        <div>
          <h3 className="total-title">Total price</h3>
          <p className="total-value">${sumCostOneProject}</p>
        </div>
      </div>
      <div>
        <p>{currDate}</p>
      </div>
    </div>
  );
};
