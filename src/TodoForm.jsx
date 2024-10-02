/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newTodo.trim() === "") return;

    onAddTodo(newTodo);
    setNewTodo("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add New Todo</button>
    </form>
  );
}

export default TodoForm;
