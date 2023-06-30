import { get } from "@/src/config/axiosClient";

export const FetchUsersListPromise = (
  state_id?: string,
  role_slug?: string,
  use_case?: string
) => {
  return new Promise((resolve, reject) => {
    let params: any = {};
    state_id && state_id !== "default" ? (params.state_id = state_id) : null;
    role_slug ? (params.role = role_slug) : null;
    use_case ? (params.use_case = use_case) : null;
    get("users", params).then((res) => {
      resolve(res.data.body);
    });
  });
};
