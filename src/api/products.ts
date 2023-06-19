import privateAxios from "lib/privateAxios";
// import { publicAxios } from "../lib/publicAxios";

const products = {
  getProducts: async () =>
    await privateAxios.post("/api/product/"),

};

export default products;
