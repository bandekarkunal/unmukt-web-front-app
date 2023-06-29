import * as interfaces from "../interfaces";

export const initialState: interfaces.curriculam = {
  curriculumDetails: {},
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "curriculum-details":
      return { ...state, curriculumDetails: action.value };
    default:
      return state;
  }
};
