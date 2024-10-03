import { useState } from "react";
import AddForm from "./AddForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(1);

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
      id: counter,
      title: newTodo,
      completed: false,
      userId: 1,
    };
    setTodos([...todos, newTodoItem]);
    setCounter(counter + 1);
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
      <AddForm onAddSubmit={handleAddSubmit} />
      <TodoList
        todos={todos}
        onCompletedClick={handleCompletedClick}
        onDeleteClick={handleDeleteClick}
        onUpdateSubmit={handleUpdateSubmit}
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
