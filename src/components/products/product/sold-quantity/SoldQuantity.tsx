import "../../products.css"
import { BsBagCheck } from "react-icons/bs"

type Props = {}

export const SoldQuantity = (props: Props) => {
  return (
    <div className="mt-8">
          <div className="h-14 bg-sold-qunatity rounded-xl flex gap-2 items-center p-3 pl-5">
            <BsBagCheck size={20}/>
            <span>Bu haftada 94 kishi sotib oldi</span>
      </div>
    </div>
  )
}