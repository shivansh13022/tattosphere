import React from "react";
import logo from "../assets/Logo.png";

const Button = ({ title }) => {
  return (
    <button className="cursor-pointer text-white text-lg font-sans bg-transparent border-none transition-transform duration-150 ease-in-out transform hover:scale-125">
      {title}
    </button>
  );
};

const Header = () => {
  return (
    <div className="flex flex-row justify-between px-10 py-8 text-white bg-black ">
      <div>
        <img src={logo} alt="logo" className="w-32" />
      </div>

      <div className="flex flex-row gap-8">
        <Button title="home" />
        <Button title="about us" />
        <Button title="gallery" />
        <Button title="contact" />
      </div>

      <div className="mt-2">
        {" "}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-400">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a9 9 0 00-9 9v3H2v4h4v4h4v-4h3l1-4h-4v-3a1 1 0 011-1h4z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
