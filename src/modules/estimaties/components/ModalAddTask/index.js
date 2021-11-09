import React from "react";
import "./style.css";
import { IconClose, ButtonAdd } from "../../../../shared";
import { ModalFormValueAmount } from "../../hooks/ModalFormValueAmount";

export const ModalAddTask = ({ cardId, isClose, isModal, cardCost }) => {
  const { description, hourMin, hourMax, comments, addNewtask, setFormField } =
    ModalFormValueAmount({ cardId, cardCost, isClose });

  return (
    <div
      onClick={isClose}
      className={isModal ? "modal-container active" : "modal-container"}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-content"
      >
        <h2 className="title-page">Add new row</h2>
        <div className="icon-close-modal">
          <IconClose onClick={isClose} />
        </div>
        <div className="form-container">
          <div className="modal-form">
            <p className="modal-title ">Description</p>
            <input
              onChange={(e) => setFormField("description", e.target.value)}
              value={description}
              type="text"
              placeholder="Description"
              className="modal-input description"
            />
          </div>
          <div className="modal-form ">
            <p className="modal-title"> Estimate (Hour) min</p>
            <input
              onChange={(e) => setFormField("hourMin", e.target.value)}
              value={hourMin}
              type="number"
              placeholder="Time here"
              className="modal-input estimate"
            />
          </div>
          <div className="modal-form ">
            <p className="modal-title"> Estimate max</p>
            <input
              onChange={(e) => setFormField("hourMax", e.target.value)}
              value={hourMax}
              type="number"
              placeholder="Time here"
              className="modal-input estimate"
            />
          </div>
          <div className="modal-form ">
            <p className="modal-title">Comments</p>
            <input
              onChange={(e) => setFormField("comments", e.target.value)}
              value={comments}
              type="text"
              placeholder="Text here"
              className="modal-input comments"
            />
          </div>
          <div className="modal-btn-container">
            <ButtonAdd
              style={{ padding: "0 38px 0 38px" }}
              onClick={addNewtask}
              Children={"Add"}
            />

            <ButtonAdd
              style={{
                background: "inherit",
                color: "#906FD9",
                padding: "0 0 0 24px",
              }}
              onClick={isClose}
              Children={"Cancel"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
