import { Submit } from "components/button/submit/Submit"
import { DefaultCarousel } from "components/products/product/carousel/DefaultCarousel"
import { Description } from "components/products/product/desription/Description"
import { Options } from "components/products/product/options/Options"
import { Price } from "components/products/product/price/Price"
import { Quantity } from "./quantity/Quantity"
import { SoldQuantity } from "./sold-quantity/SoldQuantity"
type Props = {}

export const ProductDetails = (props: Props) => {

  function addToCart(){
    console.log("added to cart")
  }

  function orderProduct(){
    console.log("added to cart")
  }

  return (
    <div className="mb-16">
          <section className="flex gap-20 w-full">
        <DefaultCarousel/>
        <div className="flex flex-col w-full">
          <Description/>
          <Options/>
          <Quantity/>
          <Price/>
          <span className="flex gap-2 mt-8">
          <Submit title="Savatga qo'shish" onClick={addToCart} active={true}/>
          <Submit title="Xarid qilish" onClick={orderProduct} active={false}/>
          </span>
          <SoldQuantity/>
        </div>
      </section>
    </div>
  )
}