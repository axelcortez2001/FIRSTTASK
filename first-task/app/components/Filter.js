"use client";

import { useState } from "react";
const Filter = ({ onFilterChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  //toggle open-close filter
  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  //pass the filter string to homepage
  const handleFilterChange = (filter) => {
    onFilterChange(filter);
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
            <a onClick={() => handleFilterChange("All")}>All</a>
          </li>
          <li>
            <a onClick={() => handleFilterChange("Finished")}>Finished</a>
          </li>
          <li>
            <a onClick={() => handleFilterChange("Pending")}>Pending</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
