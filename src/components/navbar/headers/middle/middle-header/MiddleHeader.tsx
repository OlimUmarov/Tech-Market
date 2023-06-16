import { Catalog } from "../catalog/Catalog";
import { Search } from "../search/Search";
import { Store } from "../store/Store";
const Logo = require("../../../../../assets/images/logo.png")


export const MiddleHeader = () => {

  return (
    <header className="py-5 w-full">
      <nav className="container border-gray-200 py-2.5 dark:bg-gray-800">
        <div className="flex  justify-between items-center mx-auto">

          <section>
            <a href="/" className="flex items-center">
              <img
                src={Logo}
                alt="logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="self-center text-2xl font-semibold pl-2 whitespace-nowrap dark:text-white">
                tech market
              </span>
            </a>
          </section>

          <section  className="flex gap-2 w-2/3">
            <div className="max-lg:hidden">
            <Catalog />
            </div>
          <div className="w-full max-lg:hidden">
          <Search />
          </div> 
          </section>

          <section>
            <Store />
          </section>

        </div>
        <div className="w-full mt-4 lg:hidden">
          <Search />
          </div> 
      </nav>
    </header>
  );
};
