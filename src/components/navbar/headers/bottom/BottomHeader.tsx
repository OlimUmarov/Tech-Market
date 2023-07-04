import categoriesApi from "api/categories";
import { useAppDispatch } from "app/hook";
import { changeAlert } from "features/contentSlice";
import { useEffect, useState } from "react";
import 'animate.css';
import { categoriesType } from "types/categories";
import "../bottom/bottomHeader.css";
import { Link, useLocation } from "react-router-dom";
import { getCategoryIDFromPath } from "services/exportFunctions";
const Zero = require("../../../../assets/images/zero.svg").default;

export const BottomHeader = () => {
  const [isHovered, setIsHovered] = useState<number>();
  const [categoryList, setCategoryList] = useState<Array<categoriesType>>([]);
  const [categoryId,setCategoryId] = useState<string | number>()
  const dispatch = useAppDispatch();
  const location = useLocation()

  useEffect(()=> {
    const decodedPath = decodeURIComponent(location.pathname);
    const categoryID = getCategoryIDFromPath(decodedPath)
    if(categoryID !==null) 
    setCategoryId(categoryID)
  },[location])

  const handleMouseEnter = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = (index: number) => {
    setIsHovered(-1);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    await categoriesApi
      .getCategories()
      .then((response) => {
        const res: Array<categoriesType> = response.data.results;
        if (response.status === 200) {
          const filteredMenu = res.filter(
            (category) => category.parent === null
          );
          setCategoryList(filteredMenu);
        }
      })
      .catch((err) => {
        dispatch(
          changeAlert({
            message: err.response.data.non_field_errors,
            color: "red",
          })
        );
      });
  };

  const categories = categoryList.map((category, index) => {
    return (
      <Link to={`/category/${category.name}=${category.id}`} key={category.id} className="flex flex-col gap-2 h-10 relative">
        <span
          className={`textStyle ${categoryId == category.id ? "text-blue-500" : "text-gray-400"}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          {category.name}
          {isHovered === index && (
            <span
              className={`w-full h-1 animate__animated ${category.id === isHovered? "animate__fadeInUp text-blue-500" : "animate__fadeInDown"} bg-blue-500 absolute bottom-0 left-0`}
            ></span>
          )}
        </span>
      </Link>
    );
  });

  return (
    <div className="container flex gap-10">
      <div className="flex gap-1">
        <img src={Zero} alt="0" className="w-10 h-10" />
        <span className="whitespace-nowrap text-sm font-semibold cursor-pointer mt-1">
          Halol nasiya
        </span>
      </div>
      <div className="flex items-center gap-5 overflow-x-scroll  w-full">
        {categories}
      </div>
    </div>
  );
};
