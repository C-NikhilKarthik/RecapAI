import Logo from "../images/Logo.png";
export default function Navbar() {
  return (
    <div className="border-b-[3px] pl-3 pr-5 p-4 z-10 relative flex items-center gap-5 justify-between border-gray-600 ">
      <div className="flex items-center gap-2 md:gap-4">
        <img
          src={Logo}
          alt="logo"
          className="h-[50px]"
        />
      </div>
    </div>
  );
}
