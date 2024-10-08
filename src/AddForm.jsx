/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddForm({ onAddSubmit }) {
  const [addInput, setAddInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddSubmit(addInput);
    setAddInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={addInput}
        onChange={(e) => setAddInput(e.target.value)}
        placeholder="Add new todo"
        autoFocus={true}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
