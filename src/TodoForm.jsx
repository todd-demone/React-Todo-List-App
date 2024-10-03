/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoForm({ onAddSubmit }) {
  const [addInput, setAddInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddSubmit(addInput);
        setAddInput("");
      }}
    >
      <input
        type="text"
        value={addInput}
        onChange={(e) => {
          setAddInput(e.target.value);
        }}
        placeholder="Add new todo"
      />
      <button type="submit">Add New Todo</button>
    </form>
  );
}

export default TodoForm;
