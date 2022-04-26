import { useEffect, useRef, useState } from "react";

const TodoForm = ({ submitTodo, edit }) => {
  const [input, setInput] = useState(edit?edit.text:"");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("متن خود را تایپ کنید !");
      return;
    }
    submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        ref={inputRef}
      />
      <button type="submit" className={`btn ${edit?"updateTodo":"addTodo"}`}>{edit?"ویرایش":"ثبت"}</button>
    </form>
  );
};

export default TodoForm;
