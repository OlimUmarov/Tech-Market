import { Navbar } from "../../navbar/Navbar"
import 'animate.css';
type Props = {children: React.ReactNode}

export const PrivateLayout = ({children}:Props) => {
  return (
    <div >
      <header>
      <Navbar/>
      </header>
      <div className="container">
      {children}
      </div>
    </div>
  )
}