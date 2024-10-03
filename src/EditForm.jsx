/* eslint-disable react/prop-types */

import { useState } from "react";

export default function EditForm({ todo, setIsEditing, onUpdateSubmit }) {
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
      </form>
    </li>
  );
}
