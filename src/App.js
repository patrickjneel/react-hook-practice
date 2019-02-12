import React, { useState } from 'react';
import './App.css';
import useInputState from './useInputState';


const App = () => {
  const { reset, onChange, value } = useInputState();
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  const [things, setThing] = useState([])

    return (
      <div className="App">
       <p>You clicked {count} times</p>
       <input
        placeholder="Enter Name"
        onChange={onChange}
        value={value}
       />
       <button onClick={() => {
        setThing([...things, value]);
        reset();
      }}>
        click
       </button>
       {
        things.map((name, index) => <h3 key={index}>{name}</h3>)
       }
      </div>
    );
}

export default App;
