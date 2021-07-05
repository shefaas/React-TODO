import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form';

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Shefaa's TODO</h1>
      </header>
      <Form
        setInput={setInput}
        tasks={tasks}
        input={input}
        setTasks={setTasks} />
    </div>
  );
}

export default App;
