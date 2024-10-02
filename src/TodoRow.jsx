/* eslint-disable react/prop-types */

function TodoRow({ todo, onCheckboxChange }) {
  const strikethroughStyle = {
    textDecoration: "line-through",
  };

  const todoText = !todo.completed ? (
    todo.title
  ) : (
    <span style={strikethroughStyle}>{todo.title}</span>
  );

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onCheckboxChange(todo.id)}
      />
      {todoText}
    </li>
  );
}

export default TodoRow;
