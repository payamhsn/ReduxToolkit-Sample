import React from "react";
import { useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function Todos() {
  const bb = useSelector((state) => state.todos);

  return (
    <>
      {bb.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </>
  );
}

export default Todos;
