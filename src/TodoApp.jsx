import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  function handleToggleCompleted(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleAddTodo(newTodo) {
    if (!newTodo.trim()) return;
    const newTodoItem = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
      userId: 1,
    };
    setTodos([...todos, newTodoItem]);
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleUpdateTodo(id, updatedTodo) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: updatedTodo } : todo
      )
    );
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleCompleted={handleToggleCompleted}
            onDeleteTodo={handleDeleteTodo}
            onUpdateTodo={handleUpdateTodo}
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
