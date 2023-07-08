import { get } from "@/src/config/axiosClient";

export const fetchRolesList = () => {
  return new Promise((resolve, reject) => {
    get("users/data/roles").then(
      (res) => {
        resolve(res.data.body);
      },
      (err) => {
        reject(err.response.data);
      }
    );
  });
};

export const fetchUserProfile = () => {
  return new Promise((resolve, reject) => {
    get("auth/user/profile").then(
      (res: any) => {
        if (res.data.body.state_member?.id) {
          localStorage.setItem(
            "currentState",
            JSON.stringify(res.data.body.state_member?.state)
          );
        }
        resolve(res.data.body);
      },
      (err) => {
        reject(err.response.data);
      }
    );
  });
};
