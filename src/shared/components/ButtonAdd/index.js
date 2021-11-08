import React from "react";
import "./style.css";
export const ButtonAdd = ({ onClick, Children, style }) => {
  return (
    <button style={style} className="add-button" onClick={onClick}>
      {Children}
    </button>
  );
};
