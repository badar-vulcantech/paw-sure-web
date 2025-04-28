import React from "react";
import bgCard1 from "../../assets/images/bgCard1.png";
import bgCard2 from "../../assets/images/bgCard2.png";
import bgCard3 from "../../assets/images/bgCard3.png";

const OurPuppyBreeds = () => {
  const bgCards = [
    { id: "0", image: bgCard1 },
    { id: "1", image: bgCard2 },
    { id: "2", image: bgCard3 },
  ];

  return (
    <div className="relative py-16 px-8">
      {/* Background Cards */}
      <div className="absolute right-8 top-1/3 -translate-y-1/3 flex gap-8 opacity-30">
        {bgCards.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt="Background Card"
            className={`h-48 w-72 rounded-xl shadow-md object-cover ${
              index === 1 ? "mt-8" : ""
            } ${index === 2 && "hidden md:block"}`}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="relative max-w-7xl mx-auto text-left ">
        <h1 className="text-4xl font-semibold mb-6">Our Puppies Breeds</h1>
        <p className="text-lg leading-relaxed max-w-md mb-12">
          Lorem ipsum dolor sit amet consectetur. Cras suspendisse eget nibh
          purus euismod at.
        </p>
      </div>
    </div>
  );
};

export default OurPuppyBreeds;
