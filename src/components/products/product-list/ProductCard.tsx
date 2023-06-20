import { productList } from "types/product";
import { AiTwotoneStar } from "react-icons/ai"
import "../products.css"
import { Favourite } from "./Favourite";
import { formatPrice } from "services/exportFunctions";
import { ProductOrder } from "./ProductOrder";

export const ProductCard = ({ product }: { product: productList }) => {
  return (
    <div
      className=" rounded-xl cursor-pointer"
      style={{ width: "210px", height: "450px" }}
    >
      <section className="relative">
        <img src={product.image} className="rounded-lg w-62 h-80 productList_img" alt="" />
        <span className="absolute left-0 bottom-0 text-xs p-1 rounded-lg bg-big-sales font-semibold">
          {product.popular}
        </span>
        <span className="absolute right-3 top-3 cursor-pointer z-10">
          <Favourite />
        </span>
      </section>

      <section className="relative pt-2">
      <p className="productList_title">{product.title}</p>
      <span className="flex items-center gap-1 text-gray-500 text-xs pt-2">
        <AiTwotoneStar color="#F5A623"/>
        <p>{product.rating}</p>
        <p>({product.voices} baho)</p>
      </span>
      </section>

      <section className="absolute bottom-0 text-xs">
        <span>
        <p className="line-through text-gray-400">{formatPrice(product.prev_price)} so'm</p>
        <p className="font-medium">{formatPrice(product.price)} so'm</p>
        </span>
      </section>
      <ProductOrder/>
    </div>
  );
};
