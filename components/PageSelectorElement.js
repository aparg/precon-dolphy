import React from "react";

const PageSelectorElement = ({ selected, value, setSelected }) => {
  return (
    <button
      className={`rounded-md mr-1 border-2 w-8 h-8 ${
        selected ? "bg-[#262338] text-white border-black" : "border-grey-200 "
      }`}
      onClick={setSelected}
      key={value}
      // disabled={page === 1}
    >
      {value}
    </button>
  );
};

export default PageSelectorElement;
