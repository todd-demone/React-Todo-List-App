/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoItem({
  todo,
  onCheckboxChange,
  onDeleteButtonClick,
  onUpdateTodoSubmit,
}) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updateBoxText, setUpdateBoxText] = useState(todo.title);

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
            onUpdateTodoSubmit(todo.id, updateBoxText);
            setIsUpdateMode(false);
          }}
        >
          <input
            type="text"
            value={updateBoxText}
            onChange={(e) => setUpdateBoxText(e.target.value)}
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
