/* eslint-disable react/prop-types */
import { useState } from "react";
import TodoRow from "./TodoRow";

export default function TodoTable() {
  const [todos, setTodos] = useState(TODOS);
  const [newTodo, setNewTodo] = useState("");

  function handleCheckboxChange(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleAddTodo(event) {
    event.preventDefault();
    if (newTodo.trim() === "") return;
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
      <h3>Todo List</h3>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add New Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoRow
            key={todo.id}
            todo={todo}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
      </ul>
    </>
  );
}

const TODOS = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];
