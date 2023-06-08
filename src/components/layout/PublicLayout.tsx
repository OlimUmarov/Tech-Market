import { PublicNavbar } from "../navbar/PublicNavbar"

type Props = {children: React.ReactNode}

export const PublicLayout = ({children}:Props) => {
  return (
    <div>
      <header>
        <PublicNavbar/>
      </header>
      <body>
        {children}
      </body>
    </div>
  )
}