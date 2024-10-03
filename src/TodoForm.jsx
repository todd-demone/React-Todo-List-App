/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoForm({ onNewTodoSubmit }) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNewTodoSubmit(newTodo);
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
