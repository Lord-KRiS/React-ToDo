import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todoSlice";
import { useState } from "react";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const [newTodo, setnewTodo] = useState("");
  const [todoId, settodoId] = useState(-1);

  const getTodo = (todo) => {
    setnewTodo(todo.text);
    settodoId(todo.id);
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    if (newTodo === "") return;
    dispatch(addTodo({ newTodo, todoId }));
    setnewTodo("");
    settodoId(-1);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={(e) => addNewTodo(e)}>
        <input
          placeholder="Enter a to-do"
          value={newTodo}
          onChange={(e) => setnewTodo(e.target.value)}
        />
        <button type="submit">Add to-do</button>
      </form>
      {todos.map((todo) => (
        <div className="flex items-center gap-20 ml-96">
          <h1 key={todo.id} className="m-[50px]">
            {todo.text}
          </h1>
          <button onClick={() => getTodo(todo)}>!</button>
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
