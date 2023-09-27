import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Redux() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({ type: "increase" });
  };
  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };
  const handleIncreaseByAmount = () => {
    const num = +prompt("Input number");
    dispatch({ type: "increaseByAmount", payload: num });
  };
  const handleAddTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 100),
      title: prompt("Input todo title"),
      isCompleted: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };
  const handleDeleteTodo = (todoId) => {
    dispatch({ type: "deleteTodo", payload: todoId });
  };
  const handleCompleteTodo = (todoId) => {
    dispatch({ type: "completeTodo", payload: todoId });
  };
  return (
    <div>
      <h1>Redux</h1>
      <hr />
      <p>Counter:{counter}</p>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleIncreaseByAmount}>Increase by Amount</button>

      <hr />
      <p>Todos</p>
      <ul className="list-group">
        {todos.map((item) => {
          return (
            <li key={item.id} className="list-group-item">
              <span
                onClick={() => {
                  handleCompleteTodo(item.id);
                }}
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "none",
                }}
              >
                {item.title}
              </span>
              <button
                className="btn btn-danger ms-3"
                onClick={() => {
                  handleDeleteTodo(item.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
        <button onClick={handleAddTodo}>Add todo</button>
      </ul>
    </div>
  );
}
