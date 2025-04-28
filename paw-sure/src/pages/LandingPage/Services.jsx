import React from "react";
import walker from "../../assets/images/walker.png";
import trainer from "../../assets/images/trainer.png";
import groomer from "../../assets/images/groomer.png";

const Services = () => {
  const data = [
    {
      id: "0",
      image: walker,
      label: "Dog Walkers",
      desc: "Lorem ipsum dolor sit amet consectetur. Tristique adipiscing sagittis felis convallis vestibulum dignissim purus tempus. Volutpat sed.",
    },
    {
      id: "1",
      image: trainer,
      label: "Dog Trainers",
      desc: "Lorem ipsum dolor sit amet consectetur. Tristique adipiscing sagittis felis convallis vestibulum dignissim purus tempus. Volutpat sed.",
    },
    {
      id: "2",
      image: groomer,
      label: "Dog Groomers",
      desc: "Lorem ipsum dolor sit amet consectetur. Tristique adipiscing sagittis felis convallis vestibulum dignissim purus tempus. Volutpat sed.",
    },
  ];

  return (
    <div className="py-16 px-4 text-center">
      <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
      <p className="text-lg mb-12">
        Connects you with trusted dog trainers, walkers and groomers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img src={item.image} alt={item.label} className="w-24 h-24 mb-6" />
            <h2 className="text-xl font-semibold mb-4">{item.label}</h2>
            <p className="text-sm text-gray-600 max-w-xs">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
