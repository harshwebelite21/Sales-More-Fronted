import logo from "../images/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const socialMediaLinks = [
    { url: "https://facebook.com", iconClass: "fab fa-facebook-f" },
    { url: "https://twitter.com", iconClass: "fab fa-twitter" },
    { url: "https://instagram.com", iconClass: "fab fa-instagram" },
    { url: "https://linkedin.com", iconClass: "fab fa-linkedin-in" },
  ];
  const companyInfo = [
    {
      name: "Company",
      items: ["About us", "Blog", "Contact us", "Pricing"],
    },
  ];
  const supportInfo = [
    {
      name: "Support",
      items: [
        "Help center",
        "Terms of service",
        "Legal",
        "Privacy policy",
        "Status",
      ],
    },
  ];
  return (
    <div className="bg-[#263238] text-white border-t shadow-md flex justify-center items-center ">
      <ul className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 w-[90%] mx-auto text-gray-100 gap-14 my-10">
        <li className="flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left space-y-2 py-2 gap-[10px]  lg:col-span-2">
          <Link to="/" className="flex justify-center md:justify-start">
            <img
              src={logo}
              alt="my-logo"
              className="rounded-lg shadow-lg w-[70%] md:w-40 mx-auto md:mx-0"
            />
          </Link>
          <div className="gap-[8px] flex flex-col ">
            <span className=" text-gray-200 font-semibold text-xl">
              Copy right @ 2024 Vaghasiya ltd.
            </span>
            <span className=" text-gray-400">All rights reserved</span>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 w-full">
            {socialMediaLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="text-white hover:text-blue-600 flex items-center justify-center rounded-full bg-white size-8"
              >
                <i
                  className={`${link.iconClass} fa-x rounded-full text-[#263238] p-2`}
                ></i>
              </a>
            ))}
          </div>
        </li>

        <li className="flex flex-col justify-start items-start">
          {companyInfo.map((info, index) => (
            <div key={index}>
              <div className="mb-2 font-semibold text-2xl">{info.name}</div>
              <ul>
                {info.items.map((item, idx) => (
                  <li key={idx} className="mb-1 hover:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </li>

        <ul className="flex flex-col justify-start items-start">
          {supportInfo.map((info, index) => (
            <li key={index} className="flex flex-col justify-start items-start">
              <div className="mb-2 font-semibold text-2xl">{info.name}</div>
              <ul>
                {info.items.map((item, idx) => (
                  <li key={idx} className="mb-1 hover:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <li className="flex flex-col justify-start">
          <h1 className="font-semibold text-2xl  mb-2">Stay up to date</h1>
          <form>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded w-full text-gray-700"
              placeholder="Email..."
            />
          </form>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
