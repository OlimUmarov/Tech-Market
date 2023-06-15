import { publicAxios } from "../lib/publicAxios";

const authorization = {
  register: async (data:object) =>
    await publicAxios.post("/api/users/", data),

  login: async (data:object) =>
    await publicAxios.post("/auth/token/login", data),
};

export default authorization;
