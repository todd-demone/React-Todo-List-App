/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddTodo(newTodo);
        setNewTodo("");
      }}
    >
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        placeholder="Add new todo"
      />
      <button type="submit">Add New Todo</button>
    </form>
  );
}

export default TodoForm;
