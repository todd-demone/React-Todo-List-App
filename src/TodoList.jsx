/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoList({ todos, onCheckboxChange }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheckboxChange={onCheckboxChange}
        />
      ))}
    </ul>
  );
}

export default TodoList;
