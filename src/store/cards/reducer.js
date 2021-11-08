import * as actionsCard from "./types";
export let cardId = 0;

const initialState = {
  cards: [],
};

export default function cards(state = initialState, action) {
  switch (action.type) {
    case actionsCard.CARD_ADD:
      let date = new Date();
      let currDate = date.toLocaleDateString();

      const newCard = {
        id: ++cardId,
        title: action.payload.title,
        cost: action.payload.cost,
        date: currDate,
      };
      return {
        ...state,
        cards: [...state.cards, newCard],
      };
    case actionsCard.CARD_REMOVE:
      return {
        ...state,
        cards: state.cards.filter((card) => action.payload.id !== card.id),
      };

    default:
      return state;
  }
}
