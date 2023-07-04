import { publicAxios } from "../lib/publicAxios";

const categoriesApi = {
  getCategories: async () =>
    await publicAxios.get("/api/v1/categories/"),
};

export default categoriesApi;
