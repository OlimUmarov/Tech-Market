import { useEffect, useState } from "react"
import { formatPrice } from "../../../../services/exportFunctions"
import { BsChevronRight } from "react-icons/bs"
import "../../products.css"

type Props = {}

export const Price = (props: Props) => {
  const [price,setPrice] = useState<string>()

  useEffect(()=> {
    const formattedPrice = formatPrice(96000)
    if(formattedPrice !== undefined){
      setPrice(formattedPrice)
    } 
  },[price])


  return (
    <div className="mt-8 flex flex-col gap-8">

      <section className="gap-3">
      <h1>Narx:</h1>
      <div className="flex items-center gap-5">
        <span className="text-xl font-medium ">{price} so'm</span>
        <span className="line-through text-slate-500"> 60 000 so'm</span>
        <span className="p-1 bg-big-sales text-sm font-medium rounded-md">Katta sotuvlar</span>
      </div>
      </section>

      <section className="h-14 bg-slate-100 rounded-xl flex justify-between items-center p-3 cursor-pointer hover:bg-slate-200 transitions">
        <span className="flex gap-2 items-center">
        <p className="bg-price p-1 rounded-xl text-sm font-medium">Oyiga 11 280 so'mdan</p>
        <p className="">muddatli to'lov</p>
        </span>
        <BsChevronRight size={14} color="#919293"/>
      </section>


    </div>
  )
}