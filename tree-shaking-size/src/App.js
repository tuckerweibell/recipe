import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

// dynamic imports to trigger code-split point
const ImportWithIndex = React.lazy(() =>
  import(/* webpackChunkName: "ImportWithIndex" */ './ImportWithIndex')
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Suspense fallback={<div>Loading...</div>}>
          <br />
          <ImportWithIndex />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
