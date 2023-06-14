import { BiSearch } from 'react-icons/bi'

export const Search = () => {
  
  return (
    <div className="w-full h-12  flex border-2 border-gray-200 rounded-md">
      <input 
      className=" py-2.5 px-5 w-full outline-none border-none"
      type="search" placeholder="Mahsulotlar va toifalarni boyicha qidirish"/>
      <span className='flex-center w-32 bg-slate-100 cursor-pointer'><BiSearch size={20}/></span>
    </div>
  )
}