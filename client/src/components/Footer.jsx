import Logo from "../images/Logo.png"
import { AiOutlineCopyrightCircle } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="w-full z-20 relative mt-[182px] flex flex-col pb-6 items-center justify-center gap-3">
      <div className="absolute mb-10 z-20 w-full h-[100px] bg-gray-500 border-t-[1px] blur-[150px]"></div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <img
          src={Logo}
          alt="logo"
          className="h-[50px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-white text-sm">
        <div className="flex items-center gap-1">
          <AiOutlineCopyrightCircle />
          <span>Copyright 2023</span>
        </div>
        {/* <li className="list-none">Terms and Conditions</li> */}
      </div>
    </div>
  );
}
