import { loginHandlers } from "./api/postApis/loginMockHandler";
import { profileHandlers } from "./api/getApis/profileHandler";
import { userHandler } from "./api/getApis/listingData/allUsersHandler";
import { programManagerListingHandler } from "./api/getApis/listingData/programManagersHandler";
import { blockCoordinatorsListingHandler } from "./api/getApis/listingData/blockCoordinatorsHandler";
import { trainersListingHandler } from "./api/getApis/listingData/trainersHandler";
import { studentsListingHandler } from "./api/getApis/listingData/studentsHandler";
import { assessmentHandler } from "./api/getApis/assessmentHandler";
import { rolesHandlers } from "./api/getApis/rolesHandler";
import { curriculumHandlers } from "./api/getApis/curriculumHandler";
import { meetingHandlers } from "./api/getApis/meetingHandler";
import { meetingUploadHandlers } from "./api/postApis/meetingUploadHandler";
import { curriculumUploadHandlers } from "./api/postApis/curriculumUploadHandler";

export const handlers = [
  ...loginHandlers,
  ...assessmentHandler,
  ...profileHandlers,
  ...rolesHandlers,
  ...userHandler,
  ...curriculumHandlers,
  ...meetingHandlers,
  ...programManagerListingHandler,
  ...blockCoordinatorsListingHandler,
  ...trainersListingHandler,
  ...studentsListingHandler,
  ...meetingUploadHandlers,
  ...curriculumUploadHandlers,
];
