import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  function handleCheckboxChange(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleNewTodoSubmit(newTodo) {
    if (!newTodo.trim()) return;
    const newTodoItem = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
      userId: 1,
    };
    setTodos([...todos, newTodoItem]);
  }

  function handleDeleteButtonClick(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleUpdateTodoSubmit(id, updateText) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: updateText } : todo
      )
    );
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onNewTodoSubmit={handleNewTodoSubmit} />
      <TodoList
        todos={todos}
        onCheckboxChange={handleCheckboxChange}
        onDeleteButtonClick={handleDeleteButtonClick}
        onUpdateTodoSubmit={handleUpdateTodoSubmit}
      />
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
