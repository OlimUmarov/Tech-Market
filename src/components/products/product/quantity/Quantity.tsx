import { useState } from "react"
import { AiOutlineMinus } from "react-icons/ai"
import { AiOutlinePlus } from "react-icons/ai"

type Props = {}

export const Quantity = (props: Props) => {
  const [count,setCount] = useState<number>(0)

  function handlePlus(){
    setCount((prev)=> prev + 1)
  }

  function handleMinus(){
    count > 0 && setCount((prev)=> prev + 1)
  }

  return (
    <div className="mt-8 flex flex-col gap-5">
      <h1>Miqdor:</h1>
      <div className="flex items-center gap-5">
        <span className="flex justify-between items-center h-10 w-36 border border-slate-300">
          <span  className="cursor-pointer h-full p-2"><AiOutlineMinus size={20} color="black" onClick={handleMinus}/></span>
          <span className="text-sm">{count}</span>
          <span className="cursor-pointer h-full p-2"><AiOutlinePlus size={20} color="black" onClick={ handlePlus}/></span>
        </span>
        <p className="text-green-400 text-md">Sotuvda 38 dona bor</p>
      </div>
    </div>
  )
}