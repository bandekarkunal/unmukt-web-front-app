import { rest } from "msw";

import { URL } from "../../../../config/mockConfig";

export const loginHandlers = [
  rest.post(`${URL}/auth/user/signin`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(3000),
      ctx.json({
        body: {
          token: "trhjsdfgbjh",
        },
      })
    );
  }),
];
