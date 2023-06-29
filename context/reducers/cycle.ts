import * as interfaces from "../interfaces";

export const initialState: interfaces.cycle = {
  singleCyclePhaseDetails: [],
  assessmentID: 0,
  targetDetails: [],
  selectedPhase: "va",
  fetchTargetDetails: false,
  checkListQuestions: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "single-cycle-phase-details":
      return { ...state, singleCyclePhaseDetails: action.value };
    case "assessment-id":
      return { ...state, assessmentID: action.value };
    case "target-details":
      return { ...state, targetDetails: action.value };
    case "selected-phase":
      return { ...state, selectedPhase: action.value };
    case "fetch-target-details":
      return { ...state, fetchTargetDetails: action.value };
    case "checklist-questions":
      return { ...state, checkListQuestions: action.value };
    default:
      return state;
  }
};
