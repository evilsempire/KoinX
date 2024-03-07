import React from "react";

import logo from "../../assets/logo.jpeg";

const Header = () => {
  return (
    <div className="header flex justify-between px-10 p-5 bg-white shadow-md ">
      <div className="logo-container  cursor-pointer">
        <img className="logo" src={logo} width={100} />
      </div>
      <div className="nav-items">
        <ul className="lg:flex hidden align-middle md:hidden sm:hidden">
          <li className=" mx-3 font-semibold cursor-pointer">Crypto Taxes</li>
          <li className=" mx-3 font-semibold  cursor-pointer">Free Tools</li>
          <li className=" mx-3 font-semibold  cursor-pointer">Resource Center</li>
          <li className=" mx-3 mt-[-8px]">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
