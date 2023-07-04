import { BsPerson } from "react-icons/bs";
import { useState,useRef,useEffect } from "react";
import {  useAppDispatch } from "../../../app/hook";
import {  NavLink, useNavigate } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import "./animation.css"
import { changeToken } from "../../../features/contentSlice";
import { deleteItem } from "lib/itemStorage";


export const UserAccount = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function handleMenu() {
    setIsMenuClicked(!isMenuClicked);
  }
  const handleLogout = () => {
    handleMenu();
    deleteItem("access_token")
    dispatch(changeToken(false))
    navigate("/")
    window.location.reload()
    };


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

  return (
    <div className="relative ">
      <div className="w-full lg:max-w-sm" ref={elementRef}>
      <BsPerson size={22}
      onClick={handleMenu}/>
          <div className={`absolute  ${isMenuClicked ? "visible shadow-drop-2-top" : "shadow-drop-2-bottom invisible"} left-0 max-lg:w-28  z-10 mt-1 w-28 p-2 border bg-white border-slate-100 flex flex-col items-start`}>
            <NavLink
              to="/profile"
              onClick={handleMenu}
              className="flex justify-center items-center text-sm gap-1 text-gray-500 p-1 cursor-pointer hover:text-blue-500"
            >
              <span>
              <BsPerson size={15} />
              </span>
              Profilim
            </NavLink>
            <span
              onClick={handleLogout}
              className="flex justify-start  text-sm items-center gap-1 text-gray-500 p-1 cursor-pointer hover:text-blue-500"
            >
              <span>
                <BiExit size={15} />
              </span>
              Chiqish
            </span>
          </div>

      </div>
    </div>
  );
};