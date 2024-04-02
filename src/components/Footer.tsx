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

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#263238] text-white border-t shadow-md ">
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center p-10 gap-10 ">
        <div className="flex flex-col justify-center gap-5">
          <Link to="/" className="flex justify-center md:justify-start">
            <img
              src={logo}
              alt="my-logo"
              className="rounded-lg shadow-lg w-[70%] md:w-40 mx-auto md:mx-0"
            />
          </Link>
          <div className="gap-[8px] flex flex-col">
            <span className="text-gray-200 font-semibold text-xl">
              Copy right @ {currentYear} Vaghasiya ltd.
            </span>
            <span className="text-gray-400">All rights reserved</span>
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
        </div>

        <div className="flex gap-20">
          {supportInfo.map((info) => (
            <li key={info.name} className="flex flex-col gap-3">
              <div>
                <div className="mb-2 font-semibold text-2xl">{info.name}</div>
                <ul>
                  {info.items.map((item) => (
                    <li key={item} className="mb-1 hover:text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}

          {companyInfo.map((info) => (
            <li key={info.name} className="flex flex-col gap-3">
              <div>
                <div className="mb-2 font-semibold text-2xl">{info.name}</div>
                <ul>
                  {info.items.map((item) => (
                    <li key={item} className="mb-1 hover:text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </div>

        <div className="flex flex-col ">
          <h1 className="font-semibold text-2xl mb-2">Stay up to date</h1>
          <form>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded w-full text-gray-700"
              placeholder="Email..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
