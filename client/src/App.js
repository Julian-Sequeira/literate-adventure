import React from 'react';
import logo from './logo.svg';
import './App.css';

import books from './books.svg';

import LoginForm from './Login/LoginForm.js';
import LoginModal from './Login/LoginModal.js';
import Header from './Frame/Header.js';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Container maxWidth="lg">
        <Header />
      </Container>
      {/* <img src={books} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
