import * as interfaces from "../interfaces";

export const initialState: interfaces.vscProcess = {
  selectedUsersSingleGroup: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "selected-users-single-group":
      return { ...state, selectedUsersSingleGroup: action.value };
    default:
      return state;
  }
};
