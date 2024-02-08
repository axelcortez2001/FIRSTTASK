"use client";
import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import Filter from "./Filter";
import TodoCard from "./TodoCard";

import { getData } from "@/utils/api";

const HomePage = () => {
  const [filterData, setFilterData] = useState("All");
  const [todoData, setTodoData] = useState([]);

  //fetch the all the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        const receivedTodoData = response?.todoData || response || [];

        if (receivedTodoData) {
          setTodoData(receivedTodoData);
        } else {
          console.error("Data not available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const refreshData = async () => {
    try {
      const response = await getData();
      const receivedTodoData = response?.todoData || response || [];

      if (receivedTodoData) {
        setTodoData(receivedTodoData);
      } else {
        console.error("Data not available");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //get the filter text to filter display data
  const handleFilterChange = (filter) => {
    setFilterData(filter);
  };

  return (
    <main className='max-w-4xl flex mx-auto flex-col justify-center items-center my-4'>
      <h1 className='text-4xl font-bold'>To Do List</h1>
      <div className='border w-full'></div>
      <div className='w-full flex items-center'>
        <CreateTask refreshData={refreshData} />
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* Pass the filter text and data to the card */}
        <TodoCard
          refreshData={refreshData}
          todoData={todoData}
          filterData={filterData}
        />
      </div>
    </main>
  );
};

export default HomePage;
