/* eslint-disable react/prop-types */

function TodoForm({ newTodo, setNewTodo, onNewTodoSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNewTodoSubmit();
      }}
    >
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add New Todo</button>
    </form>
  );
}

export default TodoForm;
