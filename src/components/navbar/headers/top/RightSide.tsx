import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../../app/hook';
import { Language } from '../../../../types/header';
import { changeLanguage } from '../../../../features/contentSlice';
import { languages } from '../../../api/language';

export const RightSide = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null)

  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch()

  const setLanguage = (language: string) => {
    i18n.changeLanguage(language);
    dispatch(changeLanguage(language))
  };

  function handleMenu() {
    setIsMenuClicked(!isMenuClicked);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        setIsMenuClicked(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    const languageList = languages.map((language) => (
        <div className='flex-center gap-1'
        onClick={()=> setLanguage(language.link)}>
          <img src={language.icon} alt="icon" className='w-6 h-6'/>
          <span>{language.name}</span>
        </div>
      ))

  return (
    <div className="w-full lg:max-w-sm" ref={elementRef}>
      <div className=''>
      {languageList}
      </div>
    </div>
  )
}