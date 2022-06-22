import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

let count=0;

function App() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);
  function UpdateTodo() {
    count++;
    setTask('');
    setTodo((old) => {
      return [...old, {todo:task,id:count}];
    });
  }

  function Output() {
    return (
      <ul>
        {todo.map((item) => {
          return <li>({item.id}){item.todo}</li>;
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
