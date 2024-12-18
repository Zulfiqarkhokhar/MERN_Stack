import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, [todos]);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:5001/update/" + id)
      .then((result) => {
        setTodos(
          todos.map((todo) =>
            todo._id === id ? { ...todo, done: !todo.done } : todo
          )
        );
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5001/delete/" + id)
      .then((result) => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const addTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="home">
      <h1>Todo App</h1>
      <AddTodo addTodos={addTodos} />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
              ) : (
                <BsCircleFill className="icon" />
              )}
              <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill
                  className="icon"
                  onClick={() => {
                    handleDelete(todo._id);
                  }}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Todo;
