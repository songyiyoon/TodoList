import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    // onAdd( { id: 456, text: text, status: "active" })
    onAdd({ id: uuidv4(), text: text, status: "active" });
    setText("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input"
        type="text"
        placeholder="Add Todo"
        onChange={handleChange}
        value={text}
      />

      <button className="button">Add</button>
    </form>
  );
}

export default AddTodo;
