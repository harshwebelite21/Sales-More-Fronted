import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

type MenuItem = {
  to: string;
  label: string | JSX.Element;
};

const Header: React.FC = () => {
  const [click, setClick] = useState(true);

  const menuItems: MenuItem[] = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
    { to: "/cart", label: <FiShoppingCart className="size-8" /> },
  ];
  const handleMenuClick = () => {
    setClick(!click);
  };

  return (
    <div className="flex justify-between px-4 md:px-10 py-5 text-lg">
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
          {menuItems.map((menuItem) => (
            <Link to={menuItem.to} key={menuItem.to}>
              <li
                className={`cursor-pointer text-custom-gray hover:text-dynamic-blue transition duration-300 ease-in-out`}
              >
                {menuItem.label}
              </li>
            </Link>
          ))}
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
        <div>
          {click && (
            <div className="md:hidden lg:hidden block fixed w-full h-[100dvh] mt-7 left-0 right-0 bg-slate-900 transition">
              <ul className="text-xl py-12 px-20 flex-col text-white text-center">
                {menuItems.map((menuItem) => (
                  <Link
                    to={menuItem.to}
                    key={menuItem.to}
                    onClick={handleMenuClick}
                  >
                    <li
                      className={`cursor-pointer my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ${
                        typeof menuItem.label === "object" &&
                        menuItem.label.type === FiShoppingCart
                          ? "flex justify-center"
                          : ""
                      }`}
                    >
                      {menuItem.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
