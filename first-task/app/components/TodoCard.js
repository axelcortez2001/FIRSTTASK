"use client";
import { delData, editData } from "@/utils/api";
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

  const handleFinish = async (id) => {
    try {
      await editData(id, { new_status: "Finished" });
    } catch (error) {
      console.error(error);
    } finally {
      router.refresh();
    }
  };
  function formatDate(dateString) {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }

  return (
    <div className='card w-auto bg-primary text-primary-content'>
      <div className='card-body'>
        <h2 className='card-title'> {todo.title}</h2>
        <p>{todo.description}</p>
        <p className='flex items-center'>
          <CiCalendarDate />
          {formatDate(todo.createdAt)}
        </p>
        <div className='flex flex-row space-x-2 justify-between'>
          <div className='card-actions justify-end'>
            {todo.stat === "Pending" ? (
              <button
                className='btn btn-outline btn-info'
                onClick={() => handleFinish(todo._id.toString())}
              >
                Finish
              </button>
            ) : (
              <div className='border border-blue-600 rounded-md p-3'>Done!</div>
            )}
          </div>
          <div className='w-full flex justify-end space-x-1'>
            <div className='card-actions justify-end'>
              <EditTask todo={todo} />
            </div>
            <div className='card-actions justify-end'>
              <button
                onClick={() => handleDelete(todo._id.toString())}
                className='btn btn-outline btn-error p-1'
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
