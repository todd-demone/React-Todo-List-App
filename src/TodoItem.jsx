/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoItem({ todo, onCompletedClick, onDeleteClick, onUpdateSubmit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(todo.title);

  const strikethroughStyle = {
    textDecoration: "line-through",
  };

  const todoText = !todo.completed ? (
    todo.title
  ) : (
    <span style={strikethroughStyle}>{todo.title}</span>
  );

  function handleEnableUpdateMode() {
    setIsEditing(true);
  }

  if (isEditing) {
    return (
      <li>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onUpdateSubmit(todo.id, updateInput);
            setIsEditing(false);
          }}
        >
          <input
            type="text"
            value={updateInput}
            onChange={(e) => setUpdateInput(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </li>
    );
  } else {
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onCompletedClick(todo.id)}
        />
        {todoText}
        <button onClick={handleEnableUpdateMode}>Edit</button>
        <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
