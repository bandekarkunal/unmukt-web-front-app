import * as interfaces from "../interfaces";

export const initialState: interfaces.userManagement = {
  selectedSahyogisForZoom: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "selected-sahyogis-for-zoom":
      return { ...state, selectedSahyogisForZoom: action.value };
    default:
      return state;
  }
};
