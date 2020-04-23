import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      <h1>My Todo List (WITH REDUCERS!)</h1>
      {props.state.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />;
      })}
    </div>
  );
};

export default TodoList;
