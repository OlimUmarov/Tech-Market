import { Navbar } from "../navbar/Navbar"

type Props = {children: React.ReactNode}

export const PublicLayout = ({children}:Props) => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <body>
        {children}
      </body>
    </div>
  )
}