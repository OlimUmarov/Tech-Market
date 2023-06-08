import { PrivateNavbar } from "../navbar/PrivateNavbar"
type Props = {children: React.ReactNode}

export const PrivateLayout = ({children}:Props) => {
  return (
    <div>
      <header>
      <PrivateNavbar/>
      </header>
      <body>
      {children}
      </body>
    </div>
  )
}