import React from "react";
import Charles_Spaniel from "../../assets/images/Charles_Spaniel.jpg";
import Alaskan_Husky from "../../assets/images/Alaskan_Husky.jpg";
import Maltipom from "../../assets/images/Maltipom.jpg";
import AfghanHound from "../../assets/images/AfghanHound.jpg";
import Golden_Retriever from "../../assets/images/Golden_Retriever.jpg";
import paw from "../../assets/images/paw.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
    {
      id: "4",
      name: "Afghan Hound",
      image: AfghanHound,
    },
    {
      id: "5",
      name: "Maltipom",
      image: Maltipom,
    },
    {
      id: "6",
      name: "Alaskan Husky",
      image: Alaskan_Husky,
    },
    {
      id: "7",
      name: "Golden Retriever",
      image: Golden_Retriever,
    },
    {
      id: "8",
      name: "Maltipom",
      image: Maltipom,
    },
    {
      id: "9",
      name: "Maltipom",
      image: Maltipom,
    },
    {
      id: "10",
      name: "Maltipom",
      image: Maltipom,
    },
  ];
  return (
    <div className="w-full py-10 px-8 bg-white flex flex-col items-center">
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

      {/* Swiper Carousel */}
      <div className="w-full max-w-6xl p-10 ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={4}
          loop={false}
          simulateTouch={true} // Enables drag/swipe with mouse
          grabCursor={true} // Shows grab cursor
          pagination={{ clickable: true }}
          cssMode={false}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="!min-h-[350px] pb-10 custom-swiper"
        >
          {puppyData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="rounded-lg shadow-xl bg-white h-auto flex flex-col items-center">
                <img
                  className="h-64 w-52 rounded-t-lg object-cover"
                  src={data.image}
                  alt={data.name}
                />
                <p className="p-4 text-center">{data.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FavoriteBreeds;
