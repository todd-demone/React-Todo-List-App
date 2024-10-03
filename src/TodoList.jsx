import TodoItem from "./TodoItem";

export default function TodoList(
  todos,
  onCompletedClick,
  onDeleteClick,
  onUpdateSubmit
) {
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
  </ul>;
}
