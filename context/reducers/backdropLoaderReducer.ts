import * as interfaces from "../interfaces";

export const initialState: interfaces.backdropLoader = {
  open: false,
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "open":
      return { ...state, open: action.value };
    default:
      return state;
  }
};
