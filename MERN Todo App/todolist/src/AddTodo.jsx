import React, { useState } from "react";
import axios from "axios";

const AddTodo = ({ addTodos }) => {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    setTask("");
    if (!task.trim()) return;
    axios
      .post("http://localhost:5001/add", { task: task })
      .then((result) => {
        addTodos(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add_form">
      <input
        type="text"
        placeholder="Create Todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
