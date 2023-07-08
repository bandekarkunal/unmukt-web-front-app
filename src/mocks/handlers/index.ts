import { assessmentHandler } from "./api/assessmentHandler";
import { curriculumHandlers } from "./api/curriculumHandler";
import { loginHandlers } from "./api/loginMockHandler";
import { meetingHandlers } from "./api/meetingHandler";
import { profileHandlers } from "./api/profileHandler";
import { rolesHandlers } from "./api/rolesHandler";
import { userHandler } from "./api/listingData/allUsersHandler";
import { programManagerListingHandler } from "./api/listingData/programManagersHandler";
import { blockCoordinatorsListingHandler } from "./api/listingData/blockCoordinatorsHandler";
import { trainersListingHandler } from "./api/listingData/trainersHandler";
import { studentsListingHandler } from "./api/listingData/studentsHandler";

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
];
