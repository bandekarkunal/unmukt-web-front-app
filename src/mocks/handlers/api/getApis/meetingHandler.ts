import { URL } from "@/src/config/mockConfig";
import { rest } from "msw";

export const meetingHandlers = [
  rest.get(`${URL}/meetings`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        body: [
          {
            id: "2",
            name: "Meeting 1",
            description: "This is the history of milaan for topic one",
            sequence: 1,
            created_at: "2022-12-01T13:00:56.858Z",
            trainer_name: "trainer 1",
            number_of_meetings: "7",
            number_of_topics_completed: "8",
            updated_at: "2022-12-01T13:02:00.149Z",
            deleted_at: null,
          },
          {
            id: "3",
            name: "Meeting 2",
            description: "This is the history of milaan for topic one",
            sequence: 1,
            created_at: "2022-12-01T13:01:02.939Z",
            updated_at: "2022-12-01T13:02:17.412Z",
            trainer_name: "trainer 2",
            number_of_meetings: "2",
            number_of_topics_completed: "4",
            deleted_at: null,
          },
          {
            id: "4",
            name: "Meeting 3",
            description: "This is the history of milaan for topic one",
            sequence: 1,
            created_at: "2022-12-01T13:01:06.941Z",
            updated_at: "2022-12-01T13:02:57.316Z",
            trainer_name: "trainer 3",
            number_of_meetings: "9",
            number_of_topics_completed: "14",
            deleted_at: null,
          },
          {
            id: "6",
            name: "Meeting 4",
            description:
              "<h1>What is life?</h1><p><br></p><h3>“A self-sustaining chemical system capable of Darwinian evolution.” – NASA definition of life</h3><p><br></p><h2>Learning Objectives</h2><ol><li>Identify the common features of life on earth</li><li>Distinguish living organisms from non-living entities</li><li>Explain evolution as en emergent property of life</li><li>Name the 3 domains of life</li></ol><p><br></p><h2>Life on Earth</h2><p>We are intimately familiar with life around us, because we’ve seen and interacted with them all our lives. But some forms of life went unrecognized for most of human history because they were impossible to see until microscopes were invented. Other living organisms may be difficult to recognize, even when seen, as in this picture below.</p><p><br></p>",
            sequence: 1,
            created_at: "2022-12-02T05:53:09.350Z",
            updated_at: "2023-03-21T13:58:18.504Z",
            trainer_name: "trainer 4",
            number_of_meetings: "10",
            number_of_topics_completed: "11",
            deleted_at: null,
          },
          {
            id: "7",
            name: "Meeting 5",
            description:
              '<p><span class="ql-cursor">﻿</span><span style="color: rgb(51, 51, 51);">Management can be defined as a process of getting the work or the task done that is required for achieving the goals of an organisation in an efficient and effective manner. Process implies the functions of the management. That is, planning, organising, staffing, directing and controlling. On the other hand, effective implies completing the given task and work while, efficient means successfully completing the task with minimum possible cost. Thus, management can be defined as the process of planning, organising, staffing, directing and controlling such that the goals of the organisation are achieved successfully with minimum cost and resources.</span></p>',
            sequence: 1,
            created_at: "2022-12-09T05:38:04.257Z",
            updated_at: "2022-12-09T05:38:09.808Z",
            trainer_name: "trainer 5",
            number_of_meetings: "14",
            number_of_topics_completed: "19",
            deleted_at: null,
          },
        ],
      })
    );
  }),
];
