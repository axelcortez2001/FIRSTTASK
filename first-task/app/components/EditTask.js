"use client";
import { useState } from "react";
import AddModal from "./AddModal";
import { CiEdit } from "react-icons/ci";

import { useRouter } from "next/navigation";

const EditTask = ({ todo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const date_today = new Date().toLocaleString();
  const [new_title, setNewTitle] = useState(todo.title);
  const [new_description, setNewDescription] = useState(todo.description);
  const [id, setTid] = useState(todo._id);
  const router = useRouter();

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log(title);
    try {
      const res = await fetch(`http://localhost:3000/api/routes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ new_title, new_description }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
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
        className='btn btn-outline btn-error'
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
