export interface action {
  type: any;
  value: any;
}

export interface backdropLoader {
  open: boolean;
}

export interface drawerReducer {
  open: boolean;
}

export interface globalDetails {
  rolesList: any;
  userProfile: any;
}

export interface user {
  newUserDetails: any;
}

export interface application {
  singleApplicationDetails: any;
  singleAssessmentDetails: any;
  singleAssessmentQuestions: any;
  singleVSCQuestions: any;
}

export interface assessor {
  selectedAssessors: any;
}

export interface settings {
  settingsAssessmentMatrix: any;
}

export interface loaders {
  dashboardLoader: string;
  applicationListLoader: string;
  peerMemberListLoader: string;
  peerMemberUpdateLoader: string;
}

export interface permissions {
  addAsAssessorList: any;
  addAsLeadList: any;
  addAsSupporterList: any;
  addAsInterviewerList: any;
}

export interface cycle {
  singleCyclePhaseDetails: any;
  assessmentID: any;
  targetDetails: any;
  selectedPhase: any;
  fetchTargetDetails: any;
  checkListQuestions: any;
}

export interface vscSchedule {
  scheduleDetails: any;
  applicantChecklist: any;
}

export interface vscProcess {
  selectedUsersSingleGroup: any;
}

export interface personalInterview {
  selectedApplications: any;
  rescheduleSelection: any;
  meritListSelection: any;
}

export interface girlIcon {
  selectedApplicants: any;
  removeApplicantsFromGroup: any;
  girlIconAttendanceList: any;
}

export interface finalProcess {
  rescheduleSelection: any;
}

export interface userManagement {
  selectedSahyogisForZoom: any;
}

export interface formBuilder {
  singleFormDetails: any;
}

export interface curriculam {
  curriculumDetails: any;
}

export interface training {
  selectedFacilitators: any;
}
