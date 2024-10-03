/* eslint-disable react/prop-types */
import { useState } from "react";

export default function UpdateForm({ todo, setIsEditing, onUpdateSubmit }) {
  const [updateInput, setUpdateInput] = useState(todo.title);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateSubmit(todo.id, updateInput);
    setIsEditing(false);
  }

  return (
    <li>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={updateInput}
          onChange={(e) => setUpdateInput(e.target.value)}
        />
        <button type="submit">Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    </li>
  );
}
