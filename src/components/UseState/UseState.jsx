import { useState } from 'react';
import './UseState.css';

export default function UseState() {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <h1>{count}</h1>
      <button onClick={toggleTheme}>Change theme</button>
      <h2>DISPLAY COUNT HERE</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
}
