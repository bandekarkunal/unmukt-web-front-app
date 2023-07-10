import { URL } from "@/src/config/mockConfig";
import { rest } from "msw";

export const blockCoordinatorsListingHandler = [
  rest.get(`${URL}/block-coordinators`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        body: [
          {
            photo:
              "https://redlof-milaan.s3.ap-south-1.amazonaws.com/profiles/30bbe3a0-2195-4a33-92b1-b09f17b54214.png",
            uuid: "b4a38307-bdfe-4535-81d1-8984c72b0e89",
            first_name: "Block",
            last_name: "coordinator",
            email: "blockcoordinator@gmail.com",
            state: "Karnataka",
            phone: "0000000000",
            designation: "teacher",
            block: "Karkala",
            roles: [
              {
                id: "10",
                slug: "role-blockcoordinator",
                name: "blockcoordinator",
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
            uuid: "b4a38307-bdfe-4535-81d1-8984c72b0e22",
            first_name: "Block",
            last_name: "coordinator",
            email: "blockcoordinator@gmail.com",
            phone: "9191919191",
            state: "Karnataka",
            designation: "teacher",
            block: "Karkala",
            roles: [
              {
                id: "10",
                slug: "role-blockcoordinator",
                name: "blockcoordinator",
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
