import { URL } from "@/src/config/mockConfig";
import { rest } from "msw";

export const trainersListingHandler = [
  rest.get(`${URL}/trainers`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        body: [
          {
            photo:
              "https://redlof-milaan.s3.ap-south-1.amazonaws.com/profiles/30bbe3a0-2195-4a33-92b1-b09f17b54214.png",
            uuid: "b4a38307-bdfe-4535-81d1-8984c72b0e90",
            first_name: "Trainer",
            last_name: "1",
            email: "trainer1007@gmail.com",
            phone: "2222222222",
            district: "Udipi",
            block: "Karkala",
            roles: [
              {
                id: "10",
                slug: "role-trainer",
                name: "trainer",
                created_at: "2022-05-27T06:46:44.162Z",
                updated_at: "2022-05-27T06:46:44.162Z",
                deleted_at: null,
                user_roles: {
                  created_at: "2022-06-06T18:43:28.295Z",
                  updated_at: "2022-06-06T18:43:28.295Z",
                  UserId: "67",
                  RoleId: "10",
                },
              },
            ],
            profile: null,
          },
          {
            photo:
              "https://redlof-milaan.s3.ap-south-1.amazonaws.com/profiles/30bbe3a0-2195-4a33-92b1-b09f17b54214.png",
            uuid: "b4a38307-bdfe-4535-81d1-8984c72b0e33",
            first_name: "Trainer",
            last_name: "2",
            email: "trainer2007@gmail.com",
            phone: "992929292",
            district: "Udipi",
            block: "Karkala",
            roles: [
              {
                id: "10",
                slug: "role-trainer",
                name: "trainer",
                created_at: "2022-05-27T06:46:44.162Z",
                updated_at: "2022-05-27T06:46:44.162Z",
                deleted_at: null,
                user_roles: {
                  created_at: "2022-06-06T18:43:28.295Z",
                  updated_at: "2022-06-06T18:43:28.295Z",
                  UserId: "67",
                  RoleId: "10",
                },
              },
            ],
            profile: null,
          },
        ],
      })
    );
  }),
];
