import * as actionsTasks from "./types";
export const addTask = (
  description,
  hourMin,
  hourMax,
  comments,
  cardId,
  cost
) => ({
  type: actionsTasks.TASK_ADD,
  payload: { description, hourMin, hourMax, comments, cardId, cost },
});
export const removeTask = (id) => ({
  type: actionsTasks.TASK_REMOVE,
  payload: id,
});
