// Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Components
import Grid from '@material-ui/core/Grid';

// Custom Components
import Book from "./Book";
import Description from "./Description";
import Quotes from "./Quotes";

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
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={4}>
          <Book />
        </Grid> 
        <Grid item xs={8}>
          <Description />
        </Grid>
        <Grid item xs={12}>
          <Quotes/>
        </Grid>
      </Grid>
    </React.Fragment>
    
    
  )
}