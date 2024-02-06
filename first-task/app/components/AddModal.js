"use client";
const AddModal = ({ closeModal, children }) => {
  return (
    <div className='modal modal-open'>
      <div className='modal-box'>
        <button
          className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          onClick={() => closeModal()}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default AddModal;
