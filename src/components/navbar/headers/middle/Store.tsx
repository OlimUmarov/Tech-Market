import { BsPerson } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsHandbag } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Store = () => {
  return (
         <section className="flex justify-center items-center pl-1">
                <ul className="flex gap-8 font-medium">
                    <Link to="/profile" className='cursor-pointer'>
                        <BsPerson size={22}/>
                    </Link>
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