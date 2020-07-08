// Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Components
import Grid from '@material-ui/core/Grid';

// Custom Components
import Book from "./Book.js";

// Styling for our page grid
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Current() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid className={classes.root} spacing={2}>
        <Book/> 
      </Grid>
      {/* <Book/> */}
    </React.Fragment>
    
    
  )
}