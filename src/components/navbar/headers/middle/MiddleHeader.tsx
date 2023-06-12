import { Catalog } from "./Catalog"
import { Search } from "./Search"
import { Store } from "./Store"

type Props = {}

export const MiddleHeader = (props: Props) => {
  return (
    <header>
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>

            <Catalog/>
            <Search/>
            <Store/>
         
        </div>
    </nav>
</header>
  )
}