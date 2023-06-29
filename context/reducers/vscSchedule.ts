import * as interfaces from "../interfaces";

export const initialState: interfaces.vscSchedule = {
  scheduleDetails: {},
  applicantChecklist: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "schedule-details":
      return { ...state, scheduleDetails: action.value };
    case "applicant-checklist":
      return { ...state, applicantChecklist: action.value };
    default:
      return state;
  }
};
