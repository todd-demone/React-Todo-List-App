/* eslint-disable react/prop-types */

function TodoItem({ todo, onCheckboxChange, onDeleteButtonClick }) {
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
      <button onClick={() => onDeleteButtonClick(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
