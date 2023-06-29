import * as interfaces from "../interfaces";

export const initialState: interfaces.settings = {
  settingsAssessmentMatrix: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "settings-assessment-matrix":
      return { ...state, settingsAssessmentMatrix: action.value };
    default:
      return state;
  }
};
