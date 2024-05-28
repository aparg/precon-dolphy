"use client";
import React, { useEffect, useRef, useState } from "react";

// import CityResoCard from "@/components/reso/CityResoCard";

//ICONS
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
// import { plural } from "@/constant/plural";
// import { capitalizeFirstLetter } from "@/helpers/capitalizeFIrstLetter";
// import { saleLease } from "@/constant";
// import { generateURL } from "@/helpers/generateURL";
// import { usePathname } from "next/navigation";
import PropertyCard from "./PropertyCard";

const CardScroll = ({ data, title, btnColor }) => {
  const scrollRef = useRef(null); //used to hold scroll value
  const cardRef = useRef(null); //used to hold card width value
  const cardCount = data.length;
  const [stopAutoScroll, setStopAutoScroll] = useState(false);
  useEffect(() => {
    let count = 0;
    let goBack = false;
    const autoScroll = () => {
      if (count <= cardCount / 5 && !goBack) {
        slideRight();
        count++;
      } else {
        slideLeft();
        goBack = true;
        count--;
        if (count == 0) {
          goBack = false;
        }
      }
    };
    if (!stopAutoScroll) {
      window.setInterval(autoScroll, 3000);
    } else {
      setStopAutoScroll(true);
      window.clearInterval(autoScroll);
    }
    return () => {
      window.clearInterval(autoScroll);
    };
  }, [stopAutoScroll]);

  const slideLeft = () => {
    const scrollContainer = scrollRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    const scrollAmount = cardWidth * 5; // Adjust the scroll amount as needed
    scrollContainer.scrollLeft -= scrollAmount;
  };

  const slideRight = () => {
    const scrollContainer = scrollRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    const scrollAmount = cardWidth * 5; // Adjust the scroll amount as needed
    scrollContainer.scrollLeft += scrollAmount;
  };

  return (
    <div className="position-relative">
      <div className="d-flex justify-content-between pt-5 explore-container my-0 sm:my-4 align-center">
        <div className="w-full flex flex-row justify-between items-center font-bold text-2xl">
          {title}
          <a
            className={`btn text-black float-end px-3 rounded-2xl sm:px-4 py-0 sm:py-2 h-6 sm:h-11 ${
              btnColor ? `bg-[${btnColor}]` : "bg-[#FEF7E7]"
            } hover:text-black`}
          >
            <span className="hidden sm:inline">See </span>All→
          </a>
        </div>
      </div>
      <div className="btns flex justify-space-between">
        <button
          className="scroll-left position-absolute start-0"
          title="scroll left"
          onClick={slideLeft}
        >
          <SlArrowLeft size={16} />
        </button>
        <button
          className="scroll-right position-absolute end-0"
          title="scroll right"
          onClick={slideRight}
        >
          <SlArrowRight size={16} />
        </button>
      </div>
      <div
        className="w-full row row-cols-lg-5 row-cols-md-3 row-cols-1 justify-between pb-4 flex-nowrap"
        id="slider"
        ref={scrollRef}
      >
        {data?.map((value, index) => {
          return (
            <PropertyCard
              key={index}
              data={value}
              ref={cardRef}
              link={`/pre-construction-homes/${value.city.name}/${value.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardScroll;
