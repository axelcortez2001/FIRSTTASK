"use client";
import { useState } from "react";
import AddModal from "./AddModal";
import { CiEdit } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { editData } from "@/utils/api";

const EditTask = ({ todo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const date_today = new Date().toLocaleString();
  const [new_title, setNewTitle] = useState(todo.title);
  const [new_description, setNewDescription] = useState(todo.description);
  const [status] = "Finished";
  const [id, setTid] = useState(todo._id);
  const router = useRouter();

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await editData(id, { new_title, new_description });
    } catch (error) {
      console.error(error);
    } finally {
      router.refresh();
      modalHandler();
    }
  };

  return (
    <div>
      <button
        className='btn btn-outline btn-info p-2'
        onClick={() => modalHandler()}
      >
        <CiEdit size={20} />
      </button>
      {isModalOpen && (
        <AddModal closeModal={modalHandler}>
          <form onSubmit={handleEditSubmit}>
            <div className='w-full flex justify-between'>
              <h3 className='font-bold text-lg mb-2'>ToDo New</h3>
              <h3 className=' text-blue-950  text-sm'>{date_today}</h3>
            </div>
            <div className='w-full flex flex-col space-y-3'>
              <input
                value={new_title}
                onChange={(e) => setNewTitle(e.target.value)}
                type='text'
                placeholder='Input Title'
                className='input input-bordered input-info w-full max-w-full text-gray-950'
              />
              <textarea
                type='text'
                value={new_description}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder='Input Description'
                className='textarea textarea-bordered textarea-info w-full max-w-full text-gray-950'
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

export default EditTask;
