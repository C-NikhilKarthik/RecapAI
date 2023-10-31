import React from "react";
import Logo from "../images/logo.jpg";
export default function Navbar() {
  return (
    <div className="border-b-[3px] pl-3 pr-5 p-4 flex items-center gap-5 justify-between border-[#445a8e] ">
      <div className="flex items-center gap-2 md:gap-4">
        <img
          src={Logo}
          alt="logo"
          className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full  "
        />
        <h1 className="text-4xl lg:text-5xl font-bold text-[#3B5594] hidden md:block">
          Fries
        </h1>
      </div>
    </div>
  );
}