import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/home.css';

const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header space-y-3">
        <img alt="logo" className="App-logo" src={logo} />
        <p>Hello Vite + React!</p>
        <p className="bg-green-300 text-black py-1 px-4 rounded-lg">
          <button onClick={() => setCount((count) => count + 1)} type="button">
            count is: {count}
          </button>
        </p>
        <Link className="bg-cyan-100 text-black py-1 px-4 rounded-lg" to="/test">
          Go To Testy
        </Link>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
            Learn React
          </a>
          {' | '}
          <a className="App-link" href="https://vitejs.dev/guide/features.html" rel="noopener noreferrer" target="_blank">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default HomePage;
