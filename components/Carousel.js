"use client";
// components/Carousel.js
import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Carousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("done");
      handleNextClick();
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[430px] overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[rgba(255,255,255,0.2)]">
        {" "}
      </div>
      <div className="carousel-container h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="carousel-controls absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 z-10">
        <button
          className="bg-white rounded-full hover:bg-gray-700 text-white font-bold py-2 px-4 h-10 w-10 flex justify-center items-center"
          onClick={handlePrevClick}
        >
          <SlArrowLeft className="" color="black" size={14} />
        </button>
        <button
          className="bg-white rounded-full hover:bg-gray-700 text-white font-bold py-2 px-4 h-10 w-10 flex justify-center items-center"
          onClick={handleNextClick}
        >
          <SlArrowRight className="" color="black" size={14} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
