import React from "react";
import Charles_Spaniel from "../../assets/images/Charles_Spaniel.jpg";
import Alaskan_Husky from "../../assets/images/Alaskan_Husky.jpg";
import Maltipom from "../../assets/images/Maltipom.jpg";
import Golden_Retriever from "../../assets/images/Golden_Retriever.jpg";
import paw from "../../assets/images/paw.png";
const FavoriteBreeds = () => {
  const puppyData = [
    {
      id: "0",
      name: "Charles Spaniel",
      image: Charles_Spaniel,
    },
    {
      id: "1",
      name: "Alaskan Husky",
      image: Alaskan_Husky,
    },
    {
      id: "2",
      name: "Golden Retriever",
      image: Golden_Retriever,
    },
    {
      id: "3",
      name: "Maltipom",
      image: Maltipom,
    },
  ];
  return (
    <div className="w-full py-10 bg-white flex flex-col items-center">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Our Most Favorite Breeds
        </h2>
        <div className="flex items-center gap-2 mb-6">
          <img src={paw} className="text-[#09B29F] text-xl h-8 w-8" />
          <span className="text-gray-600 text-base">
            Let's help find you a puppy love.
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 ">
        {puppyData.map((data) => (
          <div className="rounded-lg shadow-xl bg-white" key={data.id}>
            <img className="h-64 w-52 rounded-t-lg" src={data.image} />
            <p className="p-4">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteBreeds;
