import { useEffect, useRef, useState } from "react";
import { languages } from "../../../../api/language";
import { languageList } from "../../../../../types/header";
import { NavLink } from "react-router-dom";

export const RightSide = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);
  // const [language, setLanguage] = useState<Array<languageList>>(languages);
  const [selectedLanguage, setSelectedLanguage] = useState<languageList>(
    languages[0]
  );
  // OnClickMenu function, close and open
  function handleMenu() {
    setIsMenuClicked(!isMenuClicked);
  }

  function handleLanguageSelection(language: languageList) {
    if (language.link !== selectedLanguage.link) {
      setSelectedLanguage(language);
    }
    setIsMenuClicked(false);
  }
  

  // On Mouse Event, Close Menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        setIsMenuClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="flex items-center gap-5" ref={elementRef}>
      {/* Questions and Answers */}
      <NavLink to="/questions" className="cursor-pointer">Savol-javob</NavLink>

      {/* My Orders */}
      <NavLink to="/my-orders" className="cursor-pointer">Buyurtmalarim</NavLink>

      {/* Select Language */}

      <div onClick={handleMenu} className="cursor-pointer">
        <span className="flex gap-1 pl-1">
          <img src={selectedLanguage.icon} alt="icon" className="w-6 h-6" />
          <span>{selectedLanguage.name}</span>
        </span>
        {isMenuClicked && (
          <div className="h-26 w-32 absolute top-8 bg-white border border-slate-100 rounded-md drop-shadow-md transitions">
            {languages
              .filter((language) => language.link !== selectedLanguage.link) // Exclude the selected language
              .map((language) => (
                <div
                  key={language.link}
                  className="cursor-pointer flex gap-1 p-1 hover:bg-gray-200"
                  onClick={() => handleLanguageSelection(language)}
                >
                  <img src={language.icon} alt="icon" className="w-6 h-6" />
                  <span>{language.name}</span>
                </div>
              ))}
          </div>
        )}
      </div>

    </div>
  );
};
