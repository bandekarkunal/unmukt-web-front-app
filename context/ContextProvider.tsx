import React, { createContext, useReducer } from "react";
import * as interfaces from "./interfaces";

interface contextProviderProp {
  children: any;
}

import {
  initialState as backdropLoaderInitialState,
  reducer as backdropLoaderReducer,
} from "./reducers/backdropLoaderReducer";

import {
  initialState as drawerReducerInitialState,
  reducer as drawerReducer,
} from "./reducers/drawerReducer";

import {
  initialState as globalDetailsInitialState,
  reducer as globalDetails,
} from "./reducers/globalDetails";

import {
  initialState as userInitialState,
  reducer as user,
} from "./reducers/user";

import {
  initialState as applicationInitialState,
  reducer as application,
} from "./reducers/application";

import {
  initialState as assessorInitialState,
  reducer as assessor,
} from "./reducers/assessor";

import {
  initialState as settingsInitialState,
  reducer as settings,
} from "./reducers/settings";

import {
  initialState as loadersInitialState,
  reducer as loaders,
} from "./reducers/loaders";

import {
  initialState as permissionsInitialState,
  reducer as permissions,
} from "./reducers/permissions";

import {
  initialState as cycleInitialState,
  reducer as cycle,
} from "./reducers/cycle";

import {
  initialState as vscScheduleInitialState,
  reducer as vscSchedule,
} from "./reducers/vscSchedule";

import {
  initialState as vscProcessInitialState,
  reducer as vscProcess,
} from "./reducers/vscProcess";

import {
  initialState as personalInterviewInitialState,
  reducer as personalInterview,
} from "./reducers/personalInterview";

import {
  initialState as girlIconInitialState,
  reducer as girlIcon,
} from "./reducers/girlIcon";

import {
  initialState as finalProcessInitialState,
  reducer as finalProcess,
} from "./reducers/finalProcess";

import {
  initialState as userManagementInitialState,
  reducer as userManagement,
} from "./reducers/userManagment";

import {
  initialState as formBuilderInitialState,
  reducer as formBuilder,
} from "./reducers/formBuilder";

import {
  initialState as curriculumInitialState,
  reducer as curriculum,
} from "./reducers/curriculum";

import {
  initialState as trainingInitialState,
  reducer as training,
} from "./reducers/training";

interface context {
  BackdropLoader: any;
  DrawerReducer: any;
  GlobalDetails: any;
  User: any;
  Application: any;
  Assessor: any;
  Settings: any;
  Loaders: any;
  Permissions: any;
  Cycle: any;
  VscSchedule: any;
  VscProcess: any;
  UserManagment: any;
  PersonalInterview: any;
  FinalProcess: any;
  GirlIcon: any;
  FormBuilder: any;
  Curriculum: any;
  Training: any;
}

export const Context = createContext<context | null>(null);

const ContextProvider = Context.Provider;

const ContextProviderWrapper: React.FunctionComponent<contextProviderProp> = ({
  children,
}) => {
  const [backdropLoaderData, backdropLoaderDispatch] = useReducer(
    backdropLoaderReducer,
    backdropLoaderInitialState
  );

  const [drawerReducerData, drawerReducerDispatch] = useReducer(
    drawerReducer,
    drawerReducerInitialState
  );

  const [globalDetailsData, globalDetailsDispatch] = useReducer(
    globalDetails,
    globalDetailsInitialState
  );
  const [userData, userDispatch] = useReducer(user, userInitialState);

  const [applicationData, applicationDispatch] = useReducer(
    application,
    applicationInitialState
  );

  const [assessorData, assessorDispatch] = useReducer(
    assessor,
    assessorInitialState
  );

  const [settingsData, settingsDispatch] = useReducer(
    settings,
    settingsInitialState
  );

  const [loadersData, loadersDispatch] = useReducer(
    loaders,
    loadersInitialState
  );

  const [permissionsData, permissionsDispatch] = useReducer(
    permissions,
    permissionsInitialState
  );

  const [cycleData, cycleDispatch] = useReducer(cycle, cycleInitialState);

  const [vscScheduleData, vscScheduleDispatch] = useReducer(
    vscSchedule,
    vscScheduleInitialState
  );

  const [vscProcessData, vscProcessDispatch] = useReducer(
    vscProcess,
    vscProcessInitialState
  );

  const [personalInterviewData, personalInterviewDispatch] = useReducer(
    personalInterview,
    personalInterviewInitialState
  );

  const [girlIconData, girlIconDispatch] = useReducer(
    girlIcon,
    girlIconInitialState
  );

  const [finalProcessData, finalProcessDispatch] = useReducer(
    finalProcess,
    finalProcessInitialState
  );

  const [userManagementData, userManangementDispatch] = useReducer(
    userManagement,
    userManagementInitialState
  );

  const [formBuilderData, formBuilderDispatch] = useReducer(
    formBuilder,
    formBuilderInitialState
  );

  const [curriculumData, curriculumDispatch] = useReducer(
    curriculum,
    curriculumInitialState
  );

  const [trainingData, trainingDispatch] = useReducer(
    training,
    trainingInitialState
  );

  const store: any = {
    BackdropLoader: {
      state: backdropLoaderData,
      dispatch: backdropLoaderDispatch,
    },
    DrawerReducer: {
      state: drawerReducerData,
      dispatch: drawerReducerDispatch,
    },
    GlobalDetails: {
      state: globalDetailsData,
      dispatch: globalDetailsDispatch,
    },
    User: {
      state: userData,
      dispatch: userDispatch,
    },
    Application: {
      state: applicationData,
      dispatch: applicationDispatch,
    },
    Assessor: {
      state: assessorData,
      dispatch: assessorDispatch,
    },
    Settings: {
      state: settingsData,
      dispatch: settingsDispatch,
    },
    Loaders: {
      state: loadersData,
      dispatch: loadersDispatch,
    },
    Permissions: {
      state: permissionsData,
      dispatch: permissionsDispatch,
    },
    Cycle: {
      state: cycleData,
      dispatch: cycleDispatch,
    },
    VscSchedule: {
      state: vscScheduleData,
      dispatch: vscScheduleDispatch,
    },
    VscProcess: {
      state: vscProcessData,
      dispatch: vscProcessDispatch,
    },
    PersonalInterview: {
      state: personalInterviewData,
      dispatch: personalInterviewDispatch,
    },
    GirlIcon: {
      state: girlIconData,
      dispatch: girlIconDispatch,
    },
    FinalProcess: {
      state: finalProcessData,
      dispatch: finalProcessDispatch,
    },
    UserManagment: {
      state: userManagementData,
      dispatch: userManangementDispatch,
    },
    FormBuilder: {
      state: formBuilderData,
      dispatch: formBuilderDispatch,
    },
    Curriculum: {
      state: curriculumData,
      dispatch: curriculumDispatch,
    },
    Training: {
      state: trainingData,
      dispatch: trainingDispatch,
    },
  };

  return <ContextProvider value={store}>{children}</ContextProvider>;
};

export default ContextProviderWrapper;
