import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import { cgIcons } from "../../../global/icons";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const navigation = useNavigate();
  const headerContent = [
    {
      id: "0",
      item: "Available puppies",
    },
    {
      id: "1",
      item: "About Us",
    },
    {
      id: "2",
      item: "Services",
    },
    {
      id: "3",
      item: "Call(111)123-456-789",
    },
  ];
  return (
    <div>
      {/* Header from medium and above screens */}
      <div className="hidden fixed left-0 right-0 top-0 p-4 z-[100] md:flex items-center justify-around bg-white">
        <div onClick={() => navigation("/")}>
          <img src={logo} className="h-12 w-auto" />
        </div>
        <div className="flex justify-between items-center w-[60%] xl:w-[40%] text-neutral-600">
          {headerContent.map((item, index) => (
            <h1 key={index}>{item.item}</h1>
          ))}
        </div>
        <button className="py-2 px-6 rounded-lg cursor-pointer text-white bg-[#09B29F] hover:bg-[#00554B]">
          Login
        </button>
      </div>

      <div className="fixed flex items-center  w-full py-2 text-black bg-white/80 backdrop-blur-xl md:hidden z-[200]">
        <p onClick={() => setIsSideMenu(true)} className="text-3xl z-50">
          {cgIcons.CgMenuGridR}
        </p>
        <div className="w-full flex justify-center">
          <img src={logo} className="h-12 w-auto " />
        </div>
      </div>

      {/* Header for small screens */}
      {isSideMenu && (
        <div className="md:hidden fixed left-0 top-0 bottom-0 pb-24 p-4 z-[300] w-64 flex flex-col items-center justify-between backdrop-blur-xl bg-white/80 ">
          <div className="flex items-center justify-between w-full">
            <img src={logo} className="h-12 w-auto ml-[34%]" />
            <p onClick={() => setIsSideMenu(false)}>{cgIcons.CgClose}</p>
          </div>
          <div className="flex flex-col justify-between items-center gap-12 text-neutral-600">
            {headerContent.map((item, index) => (
              <h1 key={index}>{item.item}</h1>
            ))}
          </div>
          <button className="py-2 px-6 rounded-lg cursor-pointer text-white bg-[#09B29F] hover:bg-[#00554B]">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
