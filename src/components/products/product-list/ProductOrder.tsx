import IcBaselineAddShoppingCart from "assets/icons/IcBaselineAddShoppingCart";
type Props = {}

export const ProductOrder = (props: Props) => {
  return (
    <div>
        <span className="absolute bottom-0 right-4 rounded-full border-2 border-gray-200 p-2"><IcBaselineAddShoppingCart fontSize={18} color="#525252"/></span>
    </div>
  )
}