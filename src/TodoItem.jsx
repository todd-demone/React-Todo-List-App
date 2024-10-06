/* eslint-disable react/prop-types */
import { useState } from "react";
import UpdateForm from "./UpdateForm";

export default function TodoItem({
  todo,
  onCompletedClick,
  onDeleteClick,
  onUpdateSubmit,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const strikethroughStyle = {
    textDecoration: "line-through",
  };

  const todoText = !todo.completed ? (
    todo.title
  ) : (
    <span style={strikethroughStyle}>{todo.title}</span>
  );

  if (isEditing) {
    return (
      <UpdateForm
        todo={todo}
        setIsEditing={setIsEditing}
        onUpdateSubmit={onUpdateSubmit}
      />
    );
  } else {
    return (
      <li>
        <div className="flex-todo-item">
          {/* <div className="completed-checkbox"> */}
          <input
            type="checkbox"
            className="completed-checkbox"
            checked={todo.completed}
            onChange={() => onCompletedClick(todo.id)}
          />
          {/* </div> */}
          {todoText}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
        </div>
      </li>
    );
  }
}
