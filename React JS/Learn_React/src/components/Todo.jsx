import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoValue.trim()) {
      setTodo([...todo, todoValue]);
      setTodoValue("");
    }
  };

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoValue}
          placeholder="Enter Todo"
          onChange={handleChange}
        />
        <button type="sumbit">Add</button>
      </form>
      <ul>
        {todo.map((t) => {
          return <li key={Math.random()}>{t}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;
