/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoList({ todos, onCheckboxChange, onDeleteButtonClick }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheckboxChange={onCheckboxChange}
          onDeleteButtonClick={onDeleteButtonClick}
        />
      ))}
    </ul>
  );
}

export default TodoList;
