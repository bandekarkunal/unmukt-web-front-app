import * as interfaces from "../interfaces";

export const initialState: interfaces.assessor = {
  selectedAssessors: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "selected-assessors":
      return { ...state, selectedAssessors: action.value };
    default:
      return state;
  }
};
