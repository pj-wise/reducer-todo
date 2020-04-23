import React, { useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, Reducer } from "./reducers/Reducer";

const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div className='App'>
      <TodoForm dispatch={dispatch} />
      <TodoList dispatch={dispatch} state={state} />
    </div>
  );
};

export default App;
