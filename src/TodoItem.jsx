/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoItem({
  todo,
  onCheckboxChange,
  onDeleteButtonClick,
  onUpdateTodoSubmit,
}) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updateBox, setUpdateBox] = useState(todo.title);

  const strikethroughStyle = {
    textDecoration: "line-through",
  };

  const todoText = !todo.completed ? (
    todo.title
  ) : (
    <span style={strikethroughStyle}>{todo.title}</span>
  );

  function handleEnableUpdateMode() {
    setIsUpdateMode(true);
  }

  if (isUpdateMode) {
    return (
      <li>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onUpdateTodoSubmit(todo.id, updateBox);
            setIsUpdateMode(false);
          }}
        >
          <input
            type="text"
            value={updateBox}
            onChange={(e) => setUpdateBox(e.target.value)}
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
          onChange={() => onCheckboxChange(todo.id)}
        />
        {todoText}
        <button onClick={handleEnableUpdateMode}>Edit</button>
        <button onClick={() => onDeleteButtonClick(todo.id)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
