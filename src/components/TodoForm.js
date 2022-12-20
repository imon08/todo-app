import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input(e.target.value),
    });
  };

  const handleChange = (e) => {
    setInput('');
  };
  
  return (
    <form action="" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a note"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button"></button>
    </form>
  );
}

export default TodoForm;
