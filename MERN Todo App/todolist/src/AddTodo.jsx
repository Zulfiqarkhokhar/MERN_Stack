import React, { useState } from "react";
import axios from "axios";

const AddTodo = ({ addTodos }) => {
  const [task, setTask] = useState();
  const handleAdd = () => {
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
        name=""
        id=""
        placeholder="Create Todo"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
