import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [increment, setIncrement] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => setIncrement(increment+1)}>More</button><br/>
          {increment}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
