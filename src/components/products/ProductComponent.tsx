import { ProductList } from "./product-list/ProductList"
import { ProductUsage } from "./product-usage/ProductUsage"
import { ProductDetails } from "./product/ProductDetails"

type Props = {}

export const ProductComponent = (props: Props) => {
  return (
    <div className="flex flex-col w-full">
        <ProductDetails/>
        <ProductUsage/>
        <ProductList title="Omabop mahsulotlar" />
        <ProductList title="Ko'rilgan mahsulotlar" />
    </div>
  )
}