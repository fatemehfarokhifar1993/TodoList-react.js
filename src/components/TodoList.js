import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onCompleted, onDelete, onupdateTodo }) => {
  const [edit, setEdit] = useState({});
  const editTodo = (newValue) => {
    onupdateTodo(edit.id,newValue);
    setEdit({})
  };
  const renderTodos = () => {
   return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onCompleted={() => onCompleted(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => {
            setEdit(todo);
          }}
        />
      );
    });
  };

  return (
    <div className="todolist">
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
};

export default TodoList;
