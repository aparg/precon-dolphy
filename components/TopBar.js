import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center pb-1 border-b-[1px] border-[#D9DBE9] p-4">
      <form
        className="d-flex align-items-center bg-gray border-2 border-[#D9DBE9] px-4 rounded-md col-8 justify-start"
        method="POST"
        action="#"
      >
        <button type="submit" title="Search">
          <i className="bi bi-search text-gray-500 mr-3"></i>
        </button>
        <input
          type="text"
          name="query"
          placeholder="Search"
          title="Enter search keyword"
          className="focus-visible:outline-none w-10/12 py-[0.7rem]"
        />
      </form>
      <img
        src="/COA-agent-pic.jpg"
        alt="profile-picture"
        className="w-12 rounded-full mb-2"
      />
    </div>
  );
};

export default TopBar;
