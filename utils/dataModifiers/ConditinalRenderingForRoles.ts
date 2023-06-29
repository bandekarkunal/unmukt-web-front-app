export const GlobalAddUser = (role: any) => {
  let roles = ["role-admin", "role-hr", "role-state-admin"];
  // if role is admin, state-admin or hr, only then allow user to add other users.
  return roles.indexOf(role) === -1 ? false : true;
};

export const AddPermissionsCTA = (role: any) => {
  let roles = ["role-tnd"];
  // if role is tnd, do not allow user to perform actions on add assessor page
  return roles.indexOf(role) === -1 ? true : false;
};

export const ApplicationCycleCTA = (role: any) => {
  // if role is director or program head, do not allow user to perform actions on Application Cycle
  let roles = ["role-director", "role-program-head"];
  return roles.indexOf(role) === -1 ? true : false;
};

export const VideoAssessmentTabs = (role: any) => {
  // if role is admin, state head, program head or program manager, show Status tabs on Video Applications
  let roles = [
    "role-admin",
    "role-state-admin",
    "role-program-head",
    "role-program-manager",
  ];
  return roles.indexOf(role) === -1 ? false : true;
};

export const VSCTAbs = (role: any) => {
  // if role is admin, state head, program head or program manager, show Status tabs on Video Applications
  let roles = [
    "role-admin",
    "role-state-admin",
    "role-program-head",
    "role-program-manager",
  ];
  return roles.indexOf(role) === -1 ? false : true;
};

export const VASearchParams = (role: any, status?: string) => {
  /*
      1. Check for role admin, state head, program head or program manager
        a. if true, use status for assigned and unassigned.
        b. if false, proceed to next check
      2. Check for role mne
        a. if true, add status for passed and failed applications.
        b. if false, add use_case, showing applications assigned to the user.
    */

  let params: any = {};
  VideoAssessmentTabs(role)
    ? status === "assigned"
      ? (params.status = ["va_passed", "va_failed", "va_required"])
      : (params.status = "submitted")
    : role === "role-mne"
    ? (params.status = ["va_passed", "va_failed"])
    : (params.use_case = ["my_va_applications"]);

  return params;
};

export const ManageUserRoleSpecific = (arrayList: any, userRole: string) => {
  return arrayList.indexOf(userRole) === -1 ? false : true;
};

export const ShowStateFilterCheck = (userRole: string) => {
  let roleList = [
    "role-admin",
    "role-program-head",
    "role-director",
    "role-mne",
  ];

  return roleList.indexOf(userRole) === -1 ? true : false;
};
