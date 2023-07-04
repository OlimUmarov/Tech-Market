import { Navbar } from "../../navbar/Navbar"
import 'animate.css';

type Props = {children: React.ReactNode}

export const PublicLayout = ({children}:Props) => {
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