import * as interfaces from "../interfaces";

export const initialState: interfaces.user = {
  newUserDetails: {},
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "new-user-details":
      return { ...state, newUserDetails: action.value };

    default:
      return state;
  }
};
