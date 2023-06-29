import * as interfaces from "../interfaces";

export const initialState: interfaces.loaders = {
  dashboardLoader: "inital",
  applicationListLoader: "initial",
  peerMemberListLoader: "initial",
  peerMemberUpdateLoader: "initial",
};

export const reducer = (state: any, action: interfaces.action) => {
  switch (action?.type) {
    case "dashboard-loader":
      return { ...state, dashboardLoader: action.value };
    case "application-list-loader":
      return { ...state, applicationListLoader: action.value };
    case "peer-member-list-loader":
      return { ...state, peerMemberListLoader: action.value };
    case "peer-member-update-loader":
      return { ...state, peerMemberUpdateLoader: action.value };

    default:
      return state;
  }
};
