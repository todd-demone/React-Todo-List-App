import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleCheckboxChange(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleNewTodoSubmit() {
    if (!newTodo.trim()) return;
    const newTodoItem = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
      userId: 1,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        onNewTodoSubmit={handleNewTodoSubmit}
      />
      <TodoList todos={todos} onCheckboxChange={handleCheckboxChange} />
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
