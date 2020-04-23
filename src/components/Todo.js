import React from 'react';
import Moment from 'react-moment';

const Todo = (props) => {
  console.log(props);
  let date = props.todo.id;
  return (
    <div
      className={`todo${props.todo.completed ? ' completed' : ''}`}
      onClick={(event) => {
        event.preventDefault();
        console.log(props.id);
        props.dispatch({ type: 'TOGGLE_TODO', id: props.todo.id });
      }}>
      <p>{props.todo.item}</p>
      <Moment format='MM/DD/YYYY' className='date'>
        {date}
      </Moment>
    </div>
  );
};

export default Todo;
