/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoItem({ todo, onToggleCompleted, onDeleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo.title);

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
            onUpdateTodo(todo.id, updatedTodo);
            setIsEditing(false);
          }}
        >
          <input
            type="text"
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
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
          onChange={() => onToggleCompleted(todo.id)}
        />
        {todoText}
        <button onClick={handleEnableUpdateMode}>Edit</button>
        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
