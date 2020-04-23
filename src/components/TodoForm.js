import React, { useState } from 'react';

const TodoForm = (props) => {
  const [formState, setFormState] = useState();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('submitted');
        props.dispatch({ type: 'ADD_TODO', payload: formState });
        event.target.reset();
      }}>
      <input
        type='text'
        placeholder='Add a todo'
        onChange={(event) => {
          setFormState(event.target.value);
        }}
      />
      <button>Add Todo</button>
      <button
        onClick={(event) => {
          event.preventDefault();
          console.log('cleared');
          props.dispatch({ type: 'REMOVE_TODO' });
        }}>
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
