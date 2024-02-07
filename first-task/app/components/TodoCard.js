"use client";
import { delData } from "@/utils/api";
import { useRouter } from "next/navigation";
import { CiCalendarDate } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import EditTask from "./EditTask";

const TodoCard = ({ todo }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      await delData(id);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  // const handleFinish = async (id) => {
  //   try {
  //     await finishTask(id);
  //     router.refresh();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className='card w-auto bg-primary text-primary-content'>
      <div className='card-body'>
        <h2 className='card-title'> {todo.title}</h2>
        <p>{todo.description}</p>
        <p className='flex items-center'>
          <CiCalendarDate />
          {todo.createdAt}
        </p>
        <div className='flex flex-row space-x-2 justify-between'>
          <div className='card-actions justify-end'>
            <button className='btn btn-outline btn-info'>Finish</button>
          </div>
          <div className='w-full flex justify-end space-x-1'>
            <div className='card-actions justify-end'>
              <EditTask todo={todo} />
            </div>
            <div className='card-actions justify-end'>
              <button
                onClick={() => handleDelete(todo._id.toString())}
                className='btn btn-outline btn-error'
              >
                <MdDeleteOutline size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
