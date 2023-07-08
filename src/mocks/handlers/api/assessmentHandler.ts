import { rest } from "msw";

import { URL } from "../../../config/mockConfig";

export const assessmentHandler = [
  rest.get(`${URL}/identify/dashboards/assessment`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        body: {
          daily_target: 0,
          today_achieved: 0,
          weekly_target: 0,
          weekly_achieved: 0,
          total_assigned: 0,
          total_assessed: 0,
          assessor_red: 0,
          assessor_amber: 0,
          assessor_green: 0,
          total: 15113,
          total_va_unassigned: 11,
          total_va_completed: 11157,
          total_vsc_completed: 0,
          total_interview_completed: 0,
          total_red: 0,
          total_amber: 0,
          total_green: 81,
        },
      })
    );
  }),
];
