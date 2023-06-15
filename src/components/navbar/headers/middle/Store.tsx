import { BsPerson } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsHandbag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AuthModel } from '../../../auth/AuthModel'

export const Store = () => {
    const [isClicked,setIsClicked] = useState<boolean>(false)

    function handleAuth(){
        setIsClicked(true)
    }
    
  return (
         <section className="flex justify-center items-center pl-1">
                <ul className="flex gap-8 font-medium">
                    <span className='cursor-pointer'>
                        <BsPerson size={22} 
                        onClick={handleAuth}/>
                        {isClicked && <AuthModel isClicked={isClicked} />}
                    </span>
                    <Link to="/favourites" className='cursor-pointer'>
                        <MdFavoriteBorder size={22}/>
                    </Link>
                    <Link to="/cart" className='cursor-pointer'>
                        <BsHandbag size={22}/>
                    </Link>
                </ul>
            </section>
  )
}