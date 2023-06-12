import { useTranslation } from 'react-i18next';

type Props = {}

export const Search = (props: Props) => {
  const { t, i18n } = useTranslation();


  return (
    <div>
      <input type="text" placeholder=""/>
      <button></button>
    </div>
  )
}