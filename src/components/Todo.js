import React from "react";

const Todo = props => {
  console.log(props);
  return (
    <div
      className={`todo${props.todo.completed ? " completed" : ""}`}
      onClick={event => {
        event.preventDefault();
        console.log(props.id);
        props.dispatch({ type: "TOGGLE_TODO", id: props.todo.id });
      }}>
      <p>{props.todo.item}</p>
    </div>
  );
};

export default Todo;
