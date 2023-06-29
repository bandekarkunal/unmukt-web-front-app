import * as interfaces from "../interfaces";

export const initialState: interfaces.permissions = {
  addAsAssessorList: [],
  addAsLeadList: [],
  addAsSupporterList: [],
  addAsInterviewerList: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "add-as-assessor-list":
      return { ...state, addAsAssessorList: action.value };
    case "add-as-lead-list":
      return { ...state, addAsLeadList: action.value };
    case "add-as-supporter-list":
      return { ...state, addAsSupporterList: action.value };
    case "add-as-interviewer-list":
      return { ...state, addAsInterviewerList: action.value };
    default:
      return state;
  }
};
