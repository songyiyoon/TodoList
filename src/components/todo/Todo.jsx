import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li className="todo">
      <input className="checkbox"
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className="text" htmlFor={id}> {text}</label>
      <span className="icon">
        <button className="button" onClick={handleDelete}>
        <FaRegTrashAlt />
      </button>
      </span>
      
    </li>
  );
}

export default Todo;
