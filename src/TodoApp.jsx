import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  function handleCompletedClick(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleAddSubmit(newTodo) {
    if (!newTodo.trim()) return;
    const newTodoItem = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
      userId: 1,
    };
    setTodos([...todos, newTodoItem]);
  }

  function handleDeleteClick(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleUpdateSubmit(id, updatedTodo) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: updatedTodo } : todo
      )
    );
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onAddSubmit={handleAddSubmit} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedClick={handleCompletedClick}
            onDeleteClick={handleDeleteClick}
            onUpdateSubmit={handleUpdateSubmit}
          />
        ))}
      </ul>
    </>
  );
}

// const TODOS = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false,
//   },
// ];

export default TodoApp;
