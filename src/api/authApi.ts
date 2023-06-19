import privateAxios from "lib/privateAxios";
import { publicAxios } from "../lib/publicAxios";

const authorization = {
  register: async (data:object) =>
    await publicAxios.post("/api/users/", data),

  login: async (data:object) =>
    await publicAxios.post("/auth/token/login", data),

  editProfile: async (data:object) =>
    await privateAxios.post("/api/users/me/", data),
    
  getProfile: async () =>
    await privateAxios.get("/api/users/me/"),
};

export default authorization;
