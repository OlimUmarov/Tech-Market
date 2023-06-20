import { useState } from "react"
import { MdFavoriteBorder } from "react-icons/md"
import { MdFavorite } from "react-icons/md"
type Props = {}

export const Favourite = (props: Props) => {
  const [isLiked,setIsLiked] = useState<boolean>(false)

  function handleLike(){
    setIsLiked(!isLiked)
  }
  return (
    <div onClick={handleLike}>
      {isLiked ? (
        <MdFavorite color="#1C66F4" size={20}/>
      ): (
        <MdFavoriteBorder size={20}/>
      )}
    </div>
  )
}