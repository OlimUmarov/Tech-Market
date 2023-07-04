
import categoriesApi from "api/categories";
import { useAppDispatch } from "app/hook";
import { changeAlert } from "features/contentSlice";
import { useEffect, useState } from "react";
import { categoriesType } from "types/categories";

type Props = {  
}

export const MainCategories = (props: Props) => {
  const [categoryList, setCategoryList] = useState<Array<categoriesType>>([]);
  const dispatch = useAppDispatch();

  useEffect(()=> {
    getCategories()
  },[])
    
    const getCategories = async () => {
        await categoriesApi
          .getCategories()
          .then((response) => {
            const res: Array<categoriesType> = response.data.results;
            if (response.status === 200) {
              const filteredMenu = res.filter((category) => category.parent === null);
              setCategoryList(filteredMenu);
              console.log(res)
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

    const categories = categoryList

  return (
    <div>CategoriesList</div>
  )
}