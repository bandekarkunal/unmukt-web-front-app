import * as interfaces from "../interfaces";

export const initialState: interfaces.personalInterview = {
  selectedApplications: [],
  rescheduleSelection: [],
  meritListSelection: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "selected-applications":
      return { ...state, selectedApplications: action.value };
    case "reschedule-selection":
      return { ...state, rescheduleSelection: action.value };
    case "merit-list-selection":
      return { ...state, mertiListSelection: action.value };
    default:
      return state;
  }
};
