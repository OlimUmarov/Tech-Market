import { BsViewList } from 'react-icons/bs'

export const Catalog = () => {
  return (
    <div>
      <button className='flex gap-2 h-12 px-4 flex-center rounded-md font-medium bg-indigo-100 cursor-pointer'>
        <BsViewList size={20} style={{color: `var(--indigo-500)`}}/>
        <span className='text-indigo-600'>Katalog</span>
      </button>
    </div>
  )
}