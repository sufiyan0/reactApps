import React, { useState } from "react";
import { useTodoContext } from "../contexts";

const TodoForm = () => {
  // state to store the todo value 
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodoContext();

  // add todo function to add todo to the list and clear the input field after adding the todo   
  const add = (e) => {
    e.preventDefault()
    addTodo({todo, isCompleted: false})
    setTodo("")
  }
  return (
    <form onSubmit={add} className="flex">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
