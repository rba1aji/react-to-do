import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

let count = 0;

function App() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);

  function UpdateTodo() {
    count++;
    setTask('');
    setTodo((old) => {
      return [...old, { todo: task, id: count }];
    });
  }

  function enterToSubmit(event) {
    if (event.keyCode === 13 && task) {
      UpdateTodo();
    }
  }

  function deleteTodo(itemID) {
    setTodo((oldTodo) => oldTodo.filter((item) => item.id !== itemID));
  }

  function Output() {
    return (
      <ul>
        {todo.map((item) => {
          return (
            <>
              <li>
                {item.todo}
                {'  '}
                <span
                  role="img"
                  aria-label="delete"
                  onClick={() => deleteTodo(item.id)}
                >
                  🗑️
                </span>
              </li>
            </>
          );
        })}
      </ul>
    );
  }

  return (
    <div>
      <h1 className="text-center">TO DO APP</h1>

      <InputGroup className="mb-3">
        <FormControl
          value={task}
          onChange={
            (event) => setTask(event.target.value)
          }
          onKeyDown={enterToSubmit}
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon2"
        />
        <Button
          type="submit"
          onClick={UpdateTodo}
          disabled={!task} 
          // variant="outline-secondary"
          variant="dark" 
          id="button-addon2"
        >
          set to do
        </Button>
      </InputGroup>

      <Output />
    </div>
  );
}

export default App;
