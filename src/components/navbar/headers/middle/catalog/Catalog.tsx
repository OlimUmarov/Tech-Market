import { useState } from "react";
import { BsViewList } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import "../catalog/catalog.css"
import { CategoriesList } from "./categories/CategoriesList";

export const Catalog = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        className="flex gap-2 h-12 px-4 flex-center rounded-md font-medium bg-indigo-100 cursor-pointer"
        onClick={() => setModalOpen(!isModalOpen)}
      >
          <span className={` ${!isModalOpen ? 'showing flip-horizontal-up' : 'not-showing flip-horizontal-bottom'}`}><BsViewList size={23} style={{ color: `var(--indigo-500)` }} /></span>
          <span className={` ${isModalOpen ? 'showing flip-horizontal-up ' : 'not-showing flip-horizontal-bottom'}`}><MdOutlineClose size={23} style={{ color: `var(--indigo-500)` }} /></span>
        <span className="text-indigo-600">Katalog</span>
      </button>
      <CategoriesList/>
    </div>
  );
};
