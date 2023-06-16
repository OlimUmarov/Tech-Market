import { BsPerson } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthModel } from "../../../../auth/auth-model/AuthModel";
import { useAppSelector } from "app/hook";

export const Store = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [token,setToken] = useState<string>("")
  const {isToken} = useAppSelector((state)=> state.contentSlice)

  useEffect(() => {
    const getToken = localStorage.getItem("access_token");
    getToken?.length && setToken(getToken)
  }, [isToken]);

  function handleAuth(data?: boolean) {
    if (data) {
      setIsClicked(data);
    } else {
      setIsClicked(!isClicked);
    }
  }

  return (
    <section className="flex justify-center items-center pl-1">
      <ul className="flex gap-8 font-medium">
        <span className="cursor-pointer">
          {token.length > 10 ? (
            <Link to="/profile"><BsPerson size={22}/></Link>
          ) : (
            <>
            <BsPerson size={22} onClick={() => handleAuth()} />
              {isClicked && (
                <AuthModel isClicked={isClicked} onClick={handleAuth} />
              )}
            </>
          )}
        </span>
        <Link to="/favourites" className="cursor-pointer">
          <MdFavoriteBorder size={22} />
        </Link>
        <Link to="/cart" className="cursor-pointer">
          <BsHandbag size={22} />
        </Link>
      </ul>
    </section>
  );
};
