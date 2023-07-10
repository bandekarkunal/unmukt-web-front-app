import { rest } from "msw";

import { URL } from "../../../../config/mockConfig";

export const curriculumUploadHandlers = [
  rest.post(`${URL}/curriculum/create-new-curriculum`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
