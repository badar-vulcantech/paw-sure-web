import React from "react";
import pawIcon from "../../../assets/images/paw.png";
const BrowseAllPuppiesBtn = () => {
  return (
    <div className="my-12">
      {/* Browse All Puppies Button */}
      <div className="flex justify-center mb-16">
        <button className=" py-2 px-6 rounded-md text-lg font-semibold bg-[#09B29F] text-white hover:bg-[#00554B]">
          Browse All Puppies
        </button>
      </div>

      {/* Adoption Banner */}
      <div className="bg-gray-200 py-8 flex justify-center items-center text-center">
        <h2 className="text-2xl font-semibold flex items-center flex-wrap justify-center gap-2 max-w-3xl">
          Adopt From PawSure to have your very own{" "}
          <img src={pawIcon} alt="Paw Icon" className="h-6 w-6 inline-block" />
          dream puppy that will complete your life!
          <img src={pawIcon} alt="Paw Icon" className="h-6 w-6 inline-block" />
        </h2>
      </div>
    </div>
  );
};

export default BrowseAllPuppiesBtn;
