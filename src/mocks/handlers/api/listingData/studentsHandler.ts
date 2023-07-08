import { URL } from "@/src/config/mockConfig";
import { rest } from "msw";

export const studentsListingHandler = [
  rest.get(`${URL}/students`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        body: [
          {
            photo:
              "https://redlof-milaan.s3.ap-south-1.amazonaws.com/profiles/30bbe3a0-2195-4a33-92b1-b09f17b54214.png",
            uuid: "b4a38307-bdfe-4535-81d1-8984c72b0e55",
            first_name: "Student",
            last_name: "1",
            email: "student1@gmail.com",
            phone: "333333333",
            district: "Udipi",
            block: "Karkala",
            roles: [
              {
                id: "10",
                slug: "role-student",
                name: "student",
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
            uuid: "b4a38307-bdfe-4535-81d1-8984c72b0e91",
            first_name: "Student",
            last_name: "2",
            email: "student2@gmail.com",
            phone: "9494949494",
            district: "Udipi",
            block: "Karkala",
            roles: [
              {
                id: "10",
                slug: "role-student",
                name: "student",
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
