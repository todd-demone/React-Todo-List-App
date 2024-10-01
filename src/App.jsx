/* eslint-disable react/prop-types */
// import { useState } from "react";

function TodoRow({ todo }) {
  const strikethroughStyle = {
    textDecoration: "line-through",
  };

  const todoText = !todo.completed ? (
    todo.title
  ) : (
    <span style={strikethroughStyle}>{todo.title}</span>
  );
  return (
    <tr>
      <td>
        <form>
          <input type="checkbox"></input>
        </form>
      </td>
      <td>{todoText}</td>
    </tr>
  );
}

function TodoTable({ todos }) {
  const rows = todos.map((todo) => <TodoRow todo={todo} key={todo.id} />);

  return (
    <table>
      <thead>
        <tr>
          <th style={{ textAlign: "left" }}>Todo List</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default function App() {
  return <TodoTable todos={TODOS} />;
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
