"use client";
import { useState } from "react";
import AddModal from "./AddModal";
import { useRouter } from "next/navigation";
import { addData } from "@/utils/api";

const CreateTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const date_today = new Date().toLocaleString();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const stat = "Pending";
  const router = useRouter();

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const check_status = await addData({ title, description, stat });
      if (check_status.message === "ToDo Created") {
        setDescription("");
        setTitle("");
        modalHandler();
      } else {
        alert(check_status.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className='w-auto p-2'>
      <button
        className='btn btn-outline btn-primary'
        onClick={() => modalHandler()}
      >
        Create Task
      </button>
      {isModalOpen && (
        <AddModal closeModal={modalHandler}>
          <form onSubmit={handleSubmit}>
            <div className='w-full flex justify-between'>
              <h3 className='font-bold text-lg mb-2'>ToDo New</h3>
              <h3 className=' text-blue-950  text-sm'>{date_today}</h3>
            </div>
            <div className='w-full flex flex-col space-y-3'>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                placeholder='Input Title'
                className='input input-bordered input-info w-full max-w-full'
              />
              <textarea
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Input Description'
                className='textarea textarea-bordered textarea-info w-full max-w-full'
              />
            </div>
            <div className='flex justify-end mt-2'>
              <button className='btn btn-outline btn-primary' type='submit'>
                Save
              </button>
            </div>
          </form>
        </AddModal>
      )}
    </div>
  );
};

export default CreateTask;
