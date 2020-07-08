// Dependencies
import React from 'react';
import './App.css';

// Material UI Components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

// Custom Components
import LoginForm from './Login/LoginForm';
import LoginModal from './Login/LoginModal';
import Current from './Pages/Current';
import Header from './Frame/Header';

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
        <Box mt={2}>
          <Current />
        </Box>
      </Container>
      {/* <img src={books} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
