// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChatBubbleBottomCenterIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice.js";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // state variable to control visibility of search input

  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }));
  };

  const onNavScroll = () => {
    if (window.scrollY > 200) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const toggleSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme bg-slate-300"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/image-navbar"
              className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-6">
            <li className="grid items-center relative">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
                onClick={toggleSearch} // show/hide search input on click
              />
              {/* search input field */}
              {showSearch && (
                <input
                  type="text"
                  className=" w-80 rounded-full border-gray-300 border-2 px-4 py-2 
                  absolute top-0.3 right-8 focus:outline-none focus:border-cyan-600 
                  lg:w-72 md:w-64 sm:w-52 "
                />
              )}
            </li>
            <li className="grid items-center">
              <button>
                <UserIcon
                  //--click
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
              </button>
            </li>

            <li className="grid items-center">
              <ChatBubbleBottomCenterIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>

            <li className="grid items-center">
              <button
                type="button"
                onClick={onCartToggle}
                className="border-none outline-none active:scale-110
              transition-all duration-300  relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] 
                  leading-tight font-medium rounded-full flex items-center justify-center 
                  cursor-pointer marker:hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
