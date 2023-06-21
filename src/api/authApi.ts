import privateAxios from "lib/privateAxios";
import { publicAxios } from "../lib/publicAxios";

const authorization = {
  register: async (data:object) =>
    await publicAxios.post("/auth/users/", data),

  login: async (data:object) =>
    await publicAxios.post("/auth/token/login", data),

  editProfile: async (data:object) =>
    await privateAxios.put("/auth/users/me/", data),
    
  getProfile: async () =>
    await privateAxios.get("/auth/users/me/"),
};

export default authorization;
