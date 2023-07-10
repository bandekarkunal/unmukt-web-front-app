import { URL } from "@/src/config/mockConfig";
import { rest } from "msw";

export const meetingUploadHandlers = [
  rest.post(`${URL}/meetings/create-new-meeting`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
