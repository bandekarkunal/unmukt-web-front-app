import * as interfaces from "../interfaces";

export const initialState: interfaces.formBuilder = {
  singleFormDetails: {},
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "single-form-details":
      return { ...state, singleFormDetails: action.value };
    default:
      return state;
  }
};
