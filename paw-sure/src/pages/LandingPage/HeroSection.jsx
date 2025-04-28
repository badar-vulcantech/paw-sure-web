import React from "react";
import heroSectionVideo from "../../assets/videos/heroSection.mp4";
const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-24 left-0 w-full h-full object-cover"
      >
        <source src={heroSectionVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold w-1/3">
          Find The Perfect,{" "}
          <span className="text-[#09B29F]"> Healthy Puppy</span> {' '}
          <span className="text-[28px]">From PawSure</span>
        </h1>
        <div className="relative w-full max-w-xl mt-8 flex z-10 ">
          <input
            type="text"
            placeholder="Search by breed of puppy name"
            className="flex-1 py-3 px-4 rounded-lg outline-none text-gray-600 bg-white"
          />
          <button
            type="submit"
            className="absolute right-0 px-5 py-3 rounded-r-lg text-white font-semibold bg-[#09B29F] hover:bg-[#079e8a] transition"
          >
            <svg
              className="w-5 h-5 inline-block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 22 22"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
