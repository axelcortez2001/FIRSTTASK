import { CiCalendarDate } from "react-icons/ci";
const TodoCard = ({ todo }) => {
  return (
    <div className='card w-auto bg-primary text-primary-content' > 
      <div className='card-body'>
        <h2 className='card-title'> {todo.title}</h2>
        <p>{todo.description}</p>
        <p className='flex items-center'>
          <CiCalendarDate />
          {todo.createdAt}
        </p>
        <div className='card-actions justify-end'>
          <button className='btn'>Finish</button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
