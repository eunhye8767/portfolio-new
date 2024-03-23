import React from 'react';
import GlobalStyles from 'GlobalStyles';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p style={{ fontSize: '100px' }}>
            안녕하세요 가나다라마바사아자차카타파하
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
    </>
  );
}

export default App;
