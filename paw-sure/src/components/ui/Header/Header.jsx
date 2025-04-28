import logo from "../../../assets/images/logo.png";
import React from "react";
const Header = () => {
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
    <div className="fixed left-0 right-0 top-0 p-4 z-[100] flex items-center justify-around bg-white">
      <div>
        <img src={logo} className="h-12 w-auto" />
      </div>
      <div className="flex justify-between items-center w-[60%] lg:w-[40%] text-neutral-600">
        {headerContent.map((item, index) => (
          <h1 key={index}>{item.item}</h1>
        ))}
      </div>
      <button className="py-2 px-6 rounded-lg cursor-pointer text-white bg-[#09B29F] hover:bg-[#00554B]">
        Login
      </button>
    </div>
  );
};

export default Header;
