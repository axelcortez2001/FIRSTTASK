"use client";
import { useState } from "react";
import CreateTask from "./CreateTask";
import Filter from "./Filter";
import TodoCard from "./TodoCard";

export default async function HomePage() {
  const [filterData, setFilterData] = useState("All");

  const handleFilterChange = (filter) => {
    setFilterData(filter);
  };
  return (
    <main className='max-w-4xl flex mx-auto flex-col justify-center items-center my-4'>
      <h1 className='text-4xl font-bold'>To Do List</h1>
      <div className='border w-full'></div>
      <div className='w-full flex items-center'>
        <CreateTask />
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <TodoCard filterData={filterData} />
      </div>
    </main>
  );
}
