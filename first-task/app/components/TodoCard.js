import { delData, editData, getData } from "@/utils/api";
import { useRouter } from "next/navigation";
import { CiCalendarDate } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import EditTask from "./EditTask";

const TodoCard = ({ refreshData, todoData, filterData }) => {
  const data_filter = filterData;
  const router = useRouter();

  //handler to delete data
  const handleDelete = async (id) => {
    try {
      await delData(id);
    } catch (error) {
      console.log(error);
    } finally {
      refreshData();
    }
  };

  //handler to update the todo data to finished
  const handleFinish = async (id) => {
    try {
      await editData(id, { new_status: "Finished" });
    } catch (error) {
      console.error(error);
    } finally {
      refreshData();
    }
  };

  //handler to format the data of the data
  function formatDate(dateString) {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }

  //function to filter the data
  const filteredTodoData =
    data_filter === "All"
      ? todoData
      : todoData.filter((todo) => todo.stat === data_filter);

  return (
    <>
      {filteredTodoData.map((todo) => (
        <div
          key={todo._id}
          className='card w-auto bg-primary text-primary-content min-w-60'
        >
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
                  <div className='border border-blue-600 rounded-md p-3'>
                    Done!
                  </div>
                )}
              </div>
              <div className='w-full flex justify-end space-x-1'>
                <div className='card-actions justify-end'>
                  <EditTask refreshData={refreshData} todo={todo} />
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
      ))}
    </>
  );
};

export default TodoCard;
