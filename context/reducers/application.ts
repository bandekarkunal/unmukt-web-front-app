import * as interfaces from "../interfaces";

export const initialState: interfaces.application = {
  singleApplicationDetails: {},
  singleAssessmentDetails: {},
  singleAssessmentQuestions: [],
  singleVSCQuestions: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "single-application-details":
      return { ...state, singleApplicationDetails: action.value };
    case "single-assessment-details":
      return { ...state, singleAssessmentDetails: action.value };
    case "single-assessment-questions":
      return { ...state, singleAssessmentQuestions: action.value };
    case "single-vsc-questions":
      return { ...state, singleAssessmentQuestions: action.value };
    default:
      return state;
  }
};
