import { assessmentHandler } from "./api/assessmentHandler";
import { curriculumHandlers } from "./api/curriculumHandler";
import { loginHandlers } from "./api/loginMockHandler";
import { meetingHandlers } from "./api/meetingHandler";
import { profileHandlers } from "./api/profileHandler";
import { rolesHandlers } from "./api/rolesHandler";
import { userHandler } from "./api/users/usersHandler";

export const handlers = [
  ...loginHandlers,
  ...assessmentHandler,
  ...profileHandlers,
  ...rolesHandlers,
  ...userHandler,
  ...curriculumHandlers,
  ...meetingHandlers,
];
