import { BiTrash } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";

const Todo = ({ todo,onCompleted ,onDelete,onEdit}) => {
  return (
    <div className="todo">
      <div onClick={onCompleted} className={`todoText ${todo.isCompleted ? "compeleted":""}`}>{todo.text}</div>
      <div className="delete-remove">
        <button className="edit" onClick={onEdit}>
          <BiEditAlt />
        </button>
        <button className="trash" onClick={onDelete}>
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default Todo;
