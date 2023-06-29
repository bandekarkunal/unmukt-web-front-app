import * as interfaces from "../interfaces";

export const initialState: interfaces.girlIcon = {
  selectedApplicants: [],
  removeApplicantsFromGroup: [],
  girlIconAttendanceList: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "selected-applicants":
      return { ...state, selectedApplicants: action.value };
    case "remove-applicants-from-group":
      return { ...state, removeApplicantsFromGroup: action.value };
    case "girl-icon-attendance-list":
      return { ...state, girlIconAttendanceList: action.value };
    default:
      return state;
  }
};
