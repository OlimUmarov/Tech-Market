import privateAxios from "lib/privateAxios";

const products = {
  getProducts: async () =>
    await privateAxios.post("/api/product/"),

};

export default products;
