// Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

/** Custom Components */

// Frames
import Header from './Frame/Header';
import Footer from './Frame/Footer';
import Copyright from './Frame/Copyright';

// Pages
import LoginForm from './Login/LoginForm';
import LoginModal from './Login/LoginModal';
import Current from './Pages/Current';


// Icons & Logos
import books from './books.svg';
import logo from './logo.svg';


// Styling for the footer
// Adapted from https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sticky-footer
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));



function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
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
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
          <Copyright />
        </Container>
      </footer>
      {/* <img src={books} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
