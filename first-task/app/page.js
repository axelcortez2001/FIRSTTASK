import { getData } from "@/utils/api";
import CreateTask from "./components/CreateTask";
import Filter from "./components/Filter";
import TodoCard from "./components/TodoCard";

export default async function Home() {
  const { todoData } = await getData();

  return (
    <main className='max-w-4xl flex mx-auto flex-col justify-center items-center my-4'>
      <h1 className='text-4xl font-bold '>To Do List</h1>
      <div className='border w-full'></div>
      <div className='w-full flex items-center'>
        <CreateTask />
        <Filter />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {todoData.map((todo) => (
          <TodoCard key={todo._id} todo={todo} />
        ))}
      </div>
    </main>
  );
}
