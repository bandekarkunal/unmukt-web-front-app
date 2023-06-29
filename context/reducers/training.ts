import * as interfaces from "../interfaces";

export const initialState: interfaces.training = {
  selectedFacilitators: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "selected-facilitators":
      return { ...state, selectedFacilitators: action.value };
    default:
      return state;
  }
};
