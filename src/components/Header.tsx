import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(true);
  const content = (
    <>
      <div className="md:hidden lg:hidden block absolute w-full mt-7 left-0 right-0 bg-slate-900 transition">
        <ul className="text-xl py-12 px-20 flex-col text-white text-center">
          <Link
            to="/"
            onClick={() => {
              setClick(!click);
            }}
          >
            <li
              className={`cursor-pointer my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded`}
            >
              Home
            </li>
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setClick(!click);
            }}
          >
            <li
              className={`cursor-pointer my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded`}
            >
              About
            </li>
          </Link>
          <Link
            to="/products"
            onClick={() => {
              setClick(!click);
            }}
          >
            <li
              className={`cursor-pointer my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded`}
            >
              Products
            </li>
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              setClick(!click);
            }}
          >
            <li
              className={`cursor-pointer my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded`}
            >
              Contact
            </li>
          </Link>
          <Link
            to="/cart"
            onClick={() => {
              setClick(!click);
            }}
          >
            <li
              className={`cursor-pointer my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded flex justify-center`}
            >
              <FiShoppingCart className="size-8 " />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <div className="flex justify-between px-10 py-5 text-lg">
      <div className="items-center justify-start">
        <Link to="/">
          <img
            src={logo}
            alt="my-logo"
            className="max-h-12 rounded-lg shadow-md"
          />
        </Link>
      </div>
      <div className="justify-end items-center self-center">
        <ul className="hidden md:flex gap-10 items-center self-center">
          <Link to="/">
            <li
              className={`cursor-pointer text-custom-gray hover:text-dynamic-blue  transition duration-300 ease-in-out`}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`cursor-pointer text-custom-gray hover:text-dynamic-blue  transition duration-300 ease-in-out`}
            >
              About
            </li>
          </Link>
          <Link to="/products">
            <li
              className={`cursor-pointer text-custom-gray hover:text-dynamic-blue  transition duration-300 ease-in-out`}
            >
              Products
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={`cursor-pointer text-custom-gray hover:text-dynamic-blue  transition duration-300 ease-in-out`}
            >
              Contact
            </li>
          </Link>
          <Link to="/cart">
            <li
              className={`cursor-pointer text-custom-gray hover:text-dynamic-blue  transition duration-300 ease-in-out`}
            >
              <FiShoppingCart className="size-8" />
            </li>
          </Link>
        </ul>

        <div className="flex md:hidden items-center">
          {click ? (
            <CgClose
              className="border-double border-4 border-sky-500 rounded-md h-10 w-10"
              name="menu-outline"
              onClick={() => {
                setClick(!click);
              }}
            />
          ) : (
            <CgMenu
              className=" border-double border-4 border-sky-500 rounded-md h-10 w-10"
              name="close-outline"
              onClick={() => {
                setClick(!click);
              }}
            />
          )}
        </div>
        <div>{click && content}</div>
      </div>
    </div>
  );
};

export default Header;
