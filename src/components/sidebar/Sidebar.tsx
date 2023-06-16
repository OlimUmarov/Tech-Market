import { sidebar } from "types/categories"

type Props = {
    categories: Array<sidebar>
}

export const Sidebar = ({categories}: Props) => {
  return (
    <div>Sidebar</div>
  )
}