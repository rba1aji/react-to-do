import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  InputGroup,
  FormControl,
  Form,
  Card,
  ListGroup,
} from 'react-bootstrap';

let count = 0;

function App() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);

  function UpdateTodo(e) {
    e.preventDefault();
    count++;
    setTask('');
    setTodo((old) => {
      return [...old, { todo: task, id: count }];
    });
  }

  function enterToSubmit(event) {
    if (event.keyCode === 13 && task) {
      UpdateTodo(event);
    }
  }

  function deleteTodo(itemID) {
    setTodo((oldTodo) => oldTodo.filter((item) => item.id !== itemID));
  }

  function Output() {
    return (
      <>
        <Card
          style={{
            // width: '18rem'
            margin: 30,
            // background:"gray"
          }}
        >
          <Card.Header className="text-center">YOUR TO DO LIST</Card.Header>
          <ListGroup variant="flush">
            {todo.map((item) => {
              return (
                <>
                  <ListGroup.Item>
                    {item.todo}
                    {'  '}
                    <span
                      role="img"
                      aria-label="delete"
                      onClick={() => deleteTodo(item.id)}
                    >
                      🗑️
                    </span>
                  </ListGroup.Item>
                </>
              );
            })}
            <div style={{ display: !todo.length ? 'block' : 'none' }}>
              <ListGroup.Item>
                Nothing in your to do list may be add some
              </ListGroup.Item>
            </div>
          </ListGroup>
        </Card>
      </>
    );
  }

  return (
    <div>
      <h1 className="text-center">TO DO APP</h1>

      <Form onSubmit={UpdateTodo} style={{ margin: 30 }}>
        <InputGroup className="mb-3">
          <FormControl
            value={task}
            onChange={(event) => setTask(event.target.value)}
            onKeyDown={enterToSubmit}
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon2"
          />
          <Button
            type="submit"
            // onSubmit={UpdateTodo}
            disabled={!task}
            // variant="outline-secondary"
            variant="dark"
            id="button-addon2"
          >
            set to do
          </Button>
        </InputGroup>
      </Form>

      <Output />
    </div>
  );
}

export default App;
