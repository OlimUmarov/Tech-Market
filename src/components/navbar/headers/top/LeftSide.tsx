import { MdOutlinePlace } from 'react-icons/md'
import { Link } from 'react-router-dom'
type Props = {}

export const LeftSide = (props: Props) => {
  return (
    <div className='flex items-center gap-5'>

      {/* Choose Cities */}
      <div className='flex items-center'>
        <MdOutlinePlace size={18}/>
        <span className='pl-1'>Shahar:</span>
        <span className='underline font-medium pl-1 cursor-pointer'>Urgench</span>
      </div>

      {/* Pick-up Locations */}
      <Link to="/delivery-points" className='cursor-pointer'>Topshirish punktlari</Link>
    </div>
  )
}