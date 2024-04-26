import React from "react";

const PropertyCard = React.forwardRef(({ data }) => {
  return (
    <div className="w-[200px] min-h-[450px] relative">
      {console.log(data)}
      <div className="h-[250px]">
        {console.log(data.image)}
        <img
          src={`https://api.dolphy.ca${data?.image[0].image}`}
          alt="property-image"
          className="h-[220px] rounded-xl"
        ></img>
      </div>
      <div className="w-full">
        <h2 className="font-bold text-lg leading-5 text-wrap">
          {data.project_name}
        </h2>
        <h3 className="text-wrap">
          <img src="/location.svg" className="w-5 inline mb-1 h-[]"></img>
          {data.project_address}
        </h3>
      </div>
      <button className="rounded-lg bg-white w-1/2 flex justify-center h-[40px] items-center border-2 border-black absolute bottom-2 left-2">
        Details
      </button>
      {data.price_starting_from && data.price_to ? (
        <div>
          ${data.price_starting_from}-${data.price_to}
        </div>
      ) : (
        ""
      )}
      <div className="text-primary-color font-bold uppercase">
        {data.status}
      </div>
    </div>
  );
});

export default PropertyCard;
