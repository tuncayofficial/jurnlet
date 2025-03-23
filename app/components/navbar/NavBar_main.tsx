import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/JURNLET LOGOO.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import ProfilePic from "../../assets/jurnlet cover.png";
import { useAuth } from "~/contexts/auth/auth";
import { doSignInWithGoogle, doSignOut } from "~/firebase/auth/authFunctions";
import { motion } from "framer-motion";

function Header() {
  const [options, setOptions] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("")
  const authContext = useAuth();
  const { currentUser, userLoggedIn, loading } = authContext ?? {};
  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const setOptionsState = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOptions((prev) => !prev);
  };

  const onGoogleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    return doSignInWithGoogle().catch((error) => {
      console.error(error);
    });
  };

  const onSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await doSignOut()
      setOptions(false)
      window.location.reload()
    } catch(error) {
      console.error(error)
    }
  };

  const handleSearch = async(e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault(); // Prevents form from refreshing the page
    if (searchQuery.trim()) {
      navigate(`/library/${searchQuery}`);
      setSearchQuery("")
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 fixed top-0 w-full md:block hidden h-20 shadow-md items-center justify-between z-20">
      <nav className="flex justify-between items-center p-2">
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
        <div className="hidden md:flex md:mx-auto items-center">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-grow justify-center bg-gray-600 text-white placeholder-gray-300 rounded-full py-2 px-4 pr-24 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white"
              >
                <FaSearch />
              </button>
            </form>
          </div>
        <ul className="ml-auto flex items-center justify-between text-lg pr-3">
          <li>
            <button
              type="submit"
              onClick={onGoogleSignIn}
              className={`${
                userLoggedIn ? "" : "hidden"
              } text-white bg-indigo-500 mx-6 text-center px-3 py-2 rounded-xl hover:bg-indigo-800 transition-all duration-300 hover:text-white flex items-center gap-2 cursor-pointer`}
            >
              <FaPlus />
              <strong>New Article</strong>
            </button>
          </li>
          <li className={`${
                userLoggedIn ? "" : "hidden"
              } mx-3 text-xl hover:text-amber-300 duration-100 cursor-pointer hover:animate-shake`}>
            <FaBell />
          </li>
          { userLoggedIn ? "" : (
          <li className="flex flex-row justify-center items-center">
            <button className="px-4 py-2 mx-2 bg-indigo-500 rounded-lg shadow-md cursor-pointer hover:bg-indigo-800 transitiona-ll duration-200"><Link to="/login">Login</Link></button>
            <button className="px-4 py-2 ml-2 bg-indigo-500 rounded-lg shadow-md cursor-pointer hover:bg-indigo-800 transitiona-ll duration-200"><Link to="/signup">Sign up</Link></button>
          </li>
          )
          }
          <li>
            <div className="relative inline-block text-left" ref={menuRef}>
              <div>
                <button
                  type="button"
                  ref={buttonRef}
                  onClick={setOptionsState}
                  className={`inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs cursor-pointer`}
                  id="menu-button"
                  aria-expanded={options ? "true" : "false"}
                  aria-haspopup="true"
                >
                  {userLoggedIn ? (
                    <img
                      className="rounded-full w-11 h-11 border-2 border-white"
                      src={currentUser?.photoURL ?? ProfilePic}
                      alt="Profile"
                    />
                  ) : ""}
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
                    to="/account-settings"
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
                  <button
                    onClick={onSignOut}
                    className="block w-full px-4 py-2 text-left text-sm cursor-pointer text-white hover:bg-red-500 transition-all"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
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
