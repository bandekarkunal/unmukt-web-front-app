import * as interfaces from "../interfaces";

export const initialState: interfaces.globalDetails = {
  rolesList: [],
  userProfile: {},
};

export const reducer = (initialState: any, action: interfaces.action) => {
  switch (action?.type) {
    case "roles-list":
      return { ...initialState, rolesList: action.value };
    case "user-profile":
      return { ...initialState, userProfile: action.value };
    default:
      return initialState;
  }
};
