import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { MdOutlineFavorite } from 'react-icons/md'
import { TiCompass } from "react-icons/ti"
type Props = {};

export const Description = (props: Props) => {
const [favourite,setFavourite] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-5 text-base w-full ">
      {/* Reviews, Favourite */}
      <section className="flex justify-between items-center text-sm">
        <div className="flex gap-5">
          <span className="flex gap-1 items-center">
            <AiFillStar size={10} color="#F59E0B" />
            <p>5.0 ( 5 baho)</p>
          </span>
          <span>Ko'proq 100 buyurtma</span>
        </div>
        <span onClick={()=> setFavourite(!favourite)}>
        {favourite ?  
        <MdOutlineFavorite size={20} 
        className="cursor-pointer"/> : 
        <MdOutlineFavoriteBorder size={20} 
        className="cursor-pointer"/>}
        </span>
      </section>

      {/* Title, Price */}
      <section className="flex flex-col gap-5">
        <h1 className="text-2xl font-medium">Yumshoq o'yinchoq-yostiq Mushuk baton</h1>
        <span className="flex items-center gap-5">
          <p className="text-2xl font-medium text-blue-600">dan 119 000 so'm / birlik</p>
          <p className="line-through text-gray-500">250 000 so'm</p>
        </span>
      </section>

      {/* Delivery, Saller */}
      <section className="flex flex-col gap-5">
        <span className="flex gap-10">
          <p className="w-10">Sotuvchi:</p>
          <p className="underline font-medium">SmartMama</p>
        </span>

        <span className="flex gap-10">
          <p className="w-10">Yetkazib berish:</p>
          <span className="flex-center gap-1"><TiCompass size={20} color="#B8B9BA"/> 1 kun, bepul</span>
        </span>

        <span className="w-full h-px bg-gray-300"></span>
      </section>
    </div>
  );
};
