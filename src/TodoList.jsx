/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onCompletedClick,
  onDeleteClick,
  onUpdateSubmit,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompletedClick={onCompletedClick}
          onDeleteClick={onDeleteClick}
          onUpdateSubmit={onUpdateSubmit}
        />
      ))}
    </ul>
  );
}
