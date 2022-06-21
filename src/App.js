import React from 'react'
import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

function App() {
  const [task,setTask]=useState('')
  return (
    <>
      <input 
        value={task}
        onChange={
          (event)=>setTask(event.target.value)
        }
      /> 
      <button type='submit'>set to do</button>
    </>
  );
}

export default App;
