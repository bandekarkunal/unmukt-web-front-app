import { assessmentHandler } from "./api/assessmentHandler";
import { loginHandlers } from "./api/loginMockHandler";

export const handlers = [...loginHandlers, ...assessmentHandler];
