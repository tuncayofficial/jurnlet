import React, { useState } from "react";
import Logo from "../../assets/JURNLET LOGOO.jpg";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import ProfilePic from "../../assets/jurnlet cover.png";
import { useAuth } from "~/contexts/auth/auth";
import { doSignInWithGoogle, doSignOut } from "~/firebase/auth/authFunctions";

function Header() {
  const [options, setOptions] = useState<boolean>(false);
  const authContext = useAuth();
  const { currentUser, userLoggedIn, loading } = authContext ?? {}



  const setOptionsState = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOptions((prev) => !prev);
  };

  const onGoogleSignIn = (e : React.MouseEvent<HTMLButtonElement>) =>{
    return doSignInWithGoogle().catch(error =>{
      console.error(error)
    })
  }

  const onSignOut = (e : React.MouseEvent<HTMLButtonElement>) =>{
    return doSignOut().catch(error =>{
      console.error(error)
    })
  }


  return (
    <header className="bg-gray-800 fixed top-0 w-full md:block hidden h-20 shadow-md items-center justify-between z-10">
      <nav className="flex items-center p-2">
        <div>
          <img className="h-15 inline pl-6" src={Logo} alt="Jurnlet Logo" />
        </div>
        <ul className="text-lg md:text-lg lg:text-xl flex items-center ml-3">
          <li className="hover:text-white duration-400 mx-4 hover:bg-indigo-500 text-white text-center px-3 py-1.5 rounded-xl hover:cursor-pointer">
            <Link to="">Quizzes</Link>
          </li>
          <li className="hover:text-white duration-400 mx-4 hover:bg-indigo-500 text-white text-center px-3 py-1.5 rounded-xl hover:cursor-pointer">
            <Link to="">Boards</Link>
          </li>
          <li className="hover:text-white duration-400 mx-4 hover:bg-indigo-500 text-white text-center px-3 py-1.5 rounded-xl hover:cursor-pointer">
            <Link to="/library/hello">Library</Link>
          </li>
          <li className="hover:text-white duration-400 mx-4 hover:bg-indigo-500 text-white text-center px-3 py-1.5 rounded-xl hover:cursor-pointer">
            <Link to="">Help</Link>
          </li>
        </ul>
        <ul className="ml-auto flex items-center justify-between text-lg pr-3">
          <li>
            <button type = "submit" onClick={onGoogleSignIn}
              className={`${userLoggedIn ? "" : "hidden"} text-white bg-indigo-500 mx-6 text-center px-3 py-2 rounded-xl hover:bg-indigo-800 transition-all duration-300 hover:text-white flex items-center gap-2 cursor-pointer`}
            >
              <FaPlus />
              <strong>New Article</strong>
            </button>
          </li>
          <li className="mx-3 text-xl hover:text-amber-300 duration-100 cursor-pointer hover:animate-shake">
            <FaBell />
          </li>
          <li>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  onClick={setOptionsState}
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs cursor-pointer"
                  id="menu-button"
                  aria-expanded={options}
                  aria-haspopup="true"
                >
                  { userLoggedIn ? (
                    <img
                    className="rounded-full w-11 h-11 border-2 border-white"
                    src={currentUser?.photoURL ?? ProfilePic}
                    alt="Profile"
                  />) : (
                    (
                      <img
                      className="rounded-full w-11 h-11 border-2 border-white"
                      src={ProfilePic}
                      alt="Profile"
                    />)
                  )
                  
                  }
                </button>
              </div>
              <div
                className={`absolute right-0 z-10 mt-3 w-56 origin-top-right bg-gray-800 ring-1 shadow-lg ring-black/5 rounded-md ${
                  options ? "" : "hidden"
                } focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1 font-bold" role="none">
                  <Link
                    to="/account"
                    className="block px-4 py-2 text-sm text-white hover:bg-indigo-500 transition-all"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    Account settings
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-white hover:bg-indigo-500 transition-all"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    Support
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-white hover:bg-indigo-500 transition-all"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                  >
                    License
                  </Link>
                  <form method="POST" action="#" role="none">
                    <button
                      onClick={onSignOut}
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm cursor-pointer text-white hover:bg-red-500 transition-all"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;