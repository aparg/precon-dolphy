"use client";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import React, { useState } from "react";
import PageSelectorElement from "./PageSelectorElement";

const PageSelector = ({ numberOfPages, setPage, batchSize }) => {
  const [selected, setSelected] = useState(1);
  const [startsFrom, setStartsFrom] = useState(1);
  const selectPage = (page) => {
    setSelected(page);
    setPage(page);
  };
  const moveLeft = () => {
    if (startsFrom > 1) setStartsFrom(startsFrom - 3);
  };
  const moveRight = () => {
    setStartsFrom(startsFrom + 3);
  };
  return (
    <div className="flex flex-row ">
      <button
        className={`rounded-md mr-1 border-grey-200 border-2 w-8 h-8`}
        onClick={moveLeft}
        // disabled={page === 1}
      >
        {"<"}
      </button>
      {Array(batchSize)
        .fill(0)
        .map((x, idx) => (
          <PageSelectorElement
            selected={selected === startsFrom + idx}
            value={startsFrom + idx}
            setSelected={() => selectPage(startsFrom + idx)}
          />
        ))}
      <button
        className={`rounded-md mr-1 border-grey-200 border-2 w-8 h-8`}
        onClick={moveRight}
        // disabled={page === 1}
      >
        {">"}
      </button>
    </div>
  );
};

export default PageSelector;
