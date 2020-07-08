// Dependencies
import React from 'react';
import './App.css';

// Material UI Components
import Header from './Frame/Header.js';
import Container from '@material-ui/core/Container';

// Custom Components
import LoginForm from './Login/LoginForm.js';
import LoginModal from './Login/LoginModal.js';
import Current from './Pages/Current.js';

// Icons & Logos
import books from './books.svg';
import logo from './logo.svg';



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
        <Current />
      </Container>
      {/* <img src={books} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
