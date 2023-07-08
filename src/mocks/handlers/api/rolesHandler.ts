import { rest } from "msw";

import { URL } from "../../../config/mockConfig";

export const rolesHandlers = [
  rest.get(`${URL}/users/data/roles`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      //   ctx.delay(3000),
      ctx.json({
        body: [
          {
            slug: "role-program-manager",
            name: "Program Manager",
            created_at: "2022-05-27T06:46:44.162Z",
            updated_at: "2022-05-27T06:46:44.162Z",
            deleted_at: null,
          },
          {
            slug: "role-block-coordinator",
            name: "Block Coordinator ",
            created_at: "2022-05-27T06:46:44.162Z",
            updated_at: "2022-05-27T06:46:44.162Z",
            deleted_at: null,
          },
          {
            slug: "role-trainer",
            name: "Trainer",
            created_at: "2022-05-27T06:46:44.162Z",
            updated_at: "2022-05-27T06:46:44.162Z",
            deleted_at: null,
          },

          {
            slug: "role-student",
            name: "Student",
            created_at: "2022-05-27T06:46:44.162Z",
            updated_at: "2022-05-27T06:46:44.162Z",
            deleted_at: null,
          },
        ],
      })
    );
  }),
];
