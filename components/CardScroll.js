"use client";
import React, { useEffect, useRef } from "react";

// import CityResoCard from "@/components/reso/CityResoCard";

//ICONS
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
// import { plural } from "@/constant/plural";
// import { capitalizeFirstLetter } from "@/helpers/capitalizeFIrstLetter";
// import { saleLease } from "@/constant";
// import { generateURL } from "@/helpers/generateURL";
// import { usePathname } from "next/navigation";
import PropertyCard from "./PropertyCard";

const CardScroll = ({ data, title }) => {
  //   const pathname = usePathname();
  const scrollRef = useRef(null); //used to hold scroll value
  const cardRef = useRef(null); //used to hold card width value
  //   const formattedCity = city?.toLowerCase();

  //   const slideLeft = () => {
  //     const scrollContainer = scrollRef.current;
  //     const cardWidth = cardRef.current.offsetWidth;
  //     const scrollAmount = cardWidth * 3; // Adjust the scroll amount as needed
  //     scrollContainer.scrollLeft -= scrollAmount;
  //   };

  //   const slideRight = () => {
  //     const scrollContainer = scrollRef.current;
  //     const cardWidth = cardRef.current.offsetWidth;
  //     const scrollAmount = cardWidth * 3; // Adjust the scroll amount as needed
  //     scrollContainer.scrollLeft += scrollAmount;
  //   };

  return (
    <div className="position-relative">
      <div className="d-flex justify-content-between pt-5 explore-container my-0 sm:my-4 align-center">
        <div className="w-full flex flex-row justify-between items-center font-bold  text-2xl">
          {title}
          <a
            // href={`/ontario${formattedCity ? `/${formattedCity}` : ""}${
            //   listingType && formattedCity
            //     ? `/${listingType.toLowerCase()}`
            //     : ""
            // }${!formattedCity && listingType ? `/filter/${listingType}` : ""}
            // ${
            //   saleLeaseValue
            //     ? `/${Object.keys(saleLease).find(
            //         (key) => saleLease[key].value == saleLeaseValue
            //       )}`
            //     : ``
            // }`}
            // href={generateURL({
            //   cityVal: city,
            //   houseTypeVal: modifyType(listingType),
            //   saleLeaseVal: saleLeaseValue,
            //   embeddedSite: pathname.includes("embedded-site"),
            // })}
            className="btn text-black float-end px-3 rounded-2xl sm:px-4 py-0 sm:py-2 h-6 sm:h-11 bg-white"
          >
            <span className="hidden sm:inline">See </span>All
          </a>
        </div>
      </div>
      {/* <div className="btns d-flex justify-space-between">
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
      </div> */}
      <div
        className="row row-cols-lg-5 row-cols-md-3 row-cols-1 g-4 pb-4"
        id="slider"
        ref={scrollRef}
      >
        {data?.map((value, index) => {
          return <PropertyCard key={index} data={value} ref={cardRef} />;
        })}
      </div>
    </div>
  );
};

export default CardScroll;
