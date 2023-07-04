import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getCategoryIDFromPath } from "services/exportFunctions"

export const Category = () => {
    const location = useLocation()
    const [categoryId,setCategoryId] = useState<string>()

    useEffect(()=> {
  const decodedPath = decodeURIComponent(location.pathname);
  const categoryID = getCategoryIDFromPath(decodedPath)
  if(categoryID !==null) 
  setCategoryId(categoryID)
    },[location])

    

  return (
    <div>Category {categoryId}</div>
  )
}