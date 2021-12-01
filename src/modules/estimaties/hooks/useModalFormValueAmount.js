import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../store/tasks/actions";

export const useModalFormValueAmount = ({ cardId, cardCost, isClose }) => {
  const [form, setForm] = useState({
    description: "",
    hourMin: "",
    hourMax: "",
    comments: "",
  });
  const dispatch = useDispatch();
  const addNewtask = (e) => {
    e.preventDefault();
    if (
      Number(hourMin) > 0 &&
      Number(hourMax) > 0 &&
      description !== "" &&
      Number(hourMin) <= Number(hourMax)
    ) {
      dispatch(
        addTask(description, hourMin, hourMax, comments, cardId, costOneProject)
      );
    } else if (Number(hourMin) < 0 || Number(hourMax) < 0) {
      alert("Значение неверно");
    } else if (Number(hourMin) > Number(hourMax)) {
      alert("Estimate (Hour) min: введено не коректно");
    } else {
      alert("Заполните поля");
    }
    setForm({ description: "", hourMin: "", hourMax: "", comments: "" });
    isClose();
  };

  const setFormField = (field, value) => {
    setForm((oldState) => {
      return { ...oldState, [field]: value };
    });
  };
  const { description, hourMin, hourMax, comments } = form;

  const costOneHour =
    ((Number(hourMin) + Number(hourMax)) / 2) * Number(cardCost);
  const costOneProject = Math.round(costOneHour * 100) / 100;
  return {
    description,
    hourMin,
    hourMax,
    comments,
    setFormField,
    costOneHour,
    addNewtask,
  };
};
