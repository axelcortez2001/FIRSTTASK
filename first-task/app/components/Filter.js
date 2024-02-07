"use client";

import { useState } from "react";
const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return (
    <div className='dropdown dropdown-bottom'>
      <div
        tabIndex={0}
        role='button'
        className={`btn m-1 ${isFilterOpen ? "open" : ""}`}
        onClick={handleFilterToggle}
      >
        Filter
      </div>
      {isFilterOpen && (
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Finished</a>
          </li>
          <li>
            <a>Finished</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
