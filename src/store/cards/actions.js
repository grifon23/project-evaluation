import * as actionsCard from "./types";

export const addCard = (card) => ({
  type: actionsCard.CARD_ADD,
  payload: card,
});
export const removeCard = (id) => ({
  type: actionsCard.CARD_REMOVE,
  payload: id,
});
