import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  
  
  
  useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    setTodos(savedTodos || []);
}, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));

    filterTodos(selectedOption);
  }, [todos, selectedOption]);




  const addTodo = (input) => {
    const newTodo = {   
id:Date.now(),
   text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completed = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "UnCompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const selectHandler = (e) => {
    setSelectedOption(e.target.value);
    filterTodos(e.target.value);
  };
  return (
    <div className="container">
      <NavBar
        selectedOption={selectedOption}
        onChange={selectHandler}
        unCompletedTodos={todos.filter((todo) => !todo.isCompleted).length}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onCompleted={completed}
        onDelete={removeTodo}
        onupdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
