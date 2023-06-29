import * as interfaces from "../interfaces";

export const initialState: interfaces.globalDetails = {
  stateList: [],
  currentState: {},
  rolesList: [],
  userProfile: {},
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "state-list":
      return { ...state, stateList: action.value };
    case "current-state":
      return { ...state, currentState: action.value };
    case "roles-list":
      return { ...state, rolesList: action.value };
    case "user-profile":
      return { ...state, userProfile: action.value };
    default:
      return state;
  }
};
