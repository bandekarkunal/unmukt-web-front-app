import * as interfaces from "../interfaces";

export const initialState: interfaces.finalProcess = {
  rescheduleSelection: [],
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "reschedule-selection":
      return { ...state, rescheduleSelection: action.value };
    default:
      return state;
  }
};
