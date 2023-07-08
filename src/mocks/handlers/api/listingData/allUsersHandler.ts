import { URL } from "@/src/config/mockConfig";
import { rest } from "msw";

export const userHandler = [
  rest.get(`${URL}/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        body: [
          {
            photo:
              "https://redlof-milaan.s3.ap-south-1.amazonaws.com/profiles/30bbe3a0-2195-4a33-92b1-b09f17b54214.png",
            uuid: "b4a38307-bdfe-4535-81d1-8984c72b0e88",
            first_name: "Program ",
            last_name: "manager",
            email: "programmanager@gmail.com",
            phone: "0000000000",
            state: "Karnataka",
            created_at: "2022-06-06T17:45:48.976Z",
            roles: [
              {
                id: "10",
                slug: "role-program-manager",
                name: "programmanager",
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
            uuid: "b4a38307-bdfe-4535-81d1-8984c72b0e11",
            first_name: "Program",
            last_name: "manager",
            email: "programmanager@gmail.com",
            phone: "9090909090",
            state: "Karnataka",
            created_at: "2022-06-06T17:45:48.976Z",
            roles: [
              {
                id: "10",
                slug: "role-program-manager",
                name: "programmanager",
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
            uuid: "b4a38307-bdfe-4535-81d1-8984c72b0e89",
            first_name: "Block",
            last_name: "coordinator",
            email: "blockcoordinator@gmail.com",
            phone: "111111111",
            state: "Karnataka",
            created_at: "2022-06-06T17:45:48.976Z",
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
            created_at: "2022-06-06T17:45:48.976Z",
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
            uuid: "b4a38307-bdfe-4535-81d1-8984c72b0e90",
            first_name: "Trainer",
            last_name: "1",
            email: "trainer1007@gmail.com",
            phone: "2222222222",
            state: "Karnataka",
            created_at: "2022-06-06T17:45:48.976Z",
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
            state: "Karnataka",
            created_at: "2022-06-06T17:45:48.976Z",
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
            uuid: "b4a38307-bdfe-4535-81d1-8984c72b0e55",
            first_name: "Student",
            last_name: "1",
            email: "student1@gmail.com",
            phone: "333333333",
            state: "Karnataka",
            created_at: "2022-06-06T17:45:48.976Z",
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
            state: "Karnataka",
            created_at: "2022-06-06T17:45:48.976Z",
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
