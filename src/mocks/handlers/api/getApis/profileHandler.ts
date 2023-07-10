import { rest } from "msw";

import { URL } from "../../../../config/mockConfig";

export const profileHandlers = [
  rest.get(`${URL}/auth/user/profile`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        body: {
          photo: null,
          id: "1",
          uuid: "301576e7-59e4-4d0a-8d41-ed468be41ce7",
          first_name: "Unmukt",
          last_name: "Admin",
          username: "admin@think201.xyz",
          email: "admin@think201.xyz",
          phone: "1234567890",
          gender: null,
          date_of_birth: null,
          phone_verified: true,
          email_verified: true,
          designation: null,
          status: "active",
          created_at: "2022-02-16T11:20:58.818Z",
          updated_at: "2022-08-29T07:44:02.579Z",
          deleted_at: null,
          state_member: null,
          profile: null,
          roles: ["role-admin"],
          is_assessor: false,
          is_supporter: false,
          is_lead: false,
          is_trial_lead: false,
          is_interviewer: false,
        },
      })
    );
  }),
];
