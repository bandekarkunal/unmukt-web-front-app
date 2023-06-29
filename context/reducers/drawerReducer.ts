import * as interfaces from "../interfaces";

export const initialState: interfaces.drawerReducer = {
  open: true,
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "open":
      return { ...state, open: action.value };
    default:
      return state;
  }
};
