import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Navbar = () => {
  const product = useSelector((state) => state.cart);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }
  function onClose() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className="w-full flex justify-around items-center py-4 bg-green-100 gap-15 fixed top-0 left-0 z-10 shadow-md rounded-b-xl">
        <a href="">
          <img src={logo} alt="" className="w-60" />
        </a>
        <div className="flex gap-7 justify-center items-center ">
          <nav>
            <ul className="md:flex gap-7 text-xl font-semibold hidden">
              <li>
                <Link to={"/"} className="hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/shop"} className="hover:text-green-600">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={"./about"} className="hover:text-green-600">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className="flex relative justify-center items-center cursor-pointer"
            onClick={onClose}
          >
            <IoCartOutline className="text-3xl " />
            <sup className="bg-green-600 rounded-full w-4 h-4  text-white flex justify-center items-center">
              {product.length}
            </sup>
          </div>
          <div>
            {isNavOpen ? (
              <HiMenuAlt3 className="md:hidden text-3xl" onClick={toggleNav} />
            ) : (
              <HiMenuAlt1 className="md:hidden text-3xl" onClick={toggleNav} />
            )}
          </div>
        </div>
      </div>
      {isNavOpen && <ResponsiveMenu isNavOpen={isNavOpen} />}
      {isOpen && (
        <div>
          <div
            className="fixed  w-full h-full bg-black/60 z-40 duration-500 inset-0"
            onClick={() => setIsOpen(false)}
          ></div>
          <Cart onClose={() => setIsOpen(false)} isOpen={isOpen} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
