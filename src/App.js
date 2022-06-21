import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);

  function UpdateTodo() {
    setTask('');
    setTodo((old) => {
      return [...old, task];
    });
  }

  function Output() {
    return (
      <ul>
        {todo.map((i) => {
          return <li>{i}</li>;
        })}
      </ul>
    );
  }

  return (
    <>
      <input value={task} onChange={(event) => setTask(event.target.value)} />
      <button type="submit" onClick={UpdateTodo}>
        set to do
      </button>
      <Output />
    </>
  );
}

export default App;
