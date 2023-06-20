import { useState } from "react";
import { Details } from "./Details";
import { Comments } from "./Comments";

type Props = {};

export const ProductUsage = (props: Props) => {
  const [outlet, setOutlet] = useState<string>("tavsirlar");

  return (
    <div className="w-full h-full">
      <div className="w-full h-px bg-gray-200 mt-3 mb-3"></div>

          {/* Tabs */}
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2" onClick={() => setOutlet("tavsirlar")}>
            <span
              className={`inline-block p-4 border-b-2  rounded-t-lg cursor-pointer ${
                outlet === "tavsirlar"
                  ? "border-blue-600 text-blue-600"
                  : "hover:text-gray-600 hover:border-gray-300"
              }`}
            >
              Mahsulot tavsiri
            </span>
          </li>
          <li className="mr-2" onClick={() => setOutlet("sharhlar")}>
            <span
              className={`inline-block p-4 border-b-2  rounded-t-lg  cursor-pointer ${
                outlet === "sharhlar"
                  ? "border-blue-600 text-blue-600"
                  : "hover:text-gray-600 hover:border-gray-300"
              }`}
            >
              Sharhlar (3)
            </span>
          </li>
        </ul>
      </div>

            {/* Outlet */}
            {outlet === "tavsirlar" ? (
              <Details/>
            ): (
              <Comments/>
            )}
    </div>
  );
};
