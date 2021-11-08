import * as actionsTasks from "./types";
let taskId = 0;

const initialState = {
  tasks: [],
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case actionsTasks.TASK_ADD:
      const newTask = {
        id: ++taskId,
        description: action.payload.description,
        hourMin: action.payload.hourMin,
        hourMax: action.payload.hourMax,
        unit: "Hour",
        unitPrice: "",
        cost: action.payload.cost,
        comments: action.payload.comments,
        cardId: action.payload.cardId,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case actionsTasks.TASK_REMOVE:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
