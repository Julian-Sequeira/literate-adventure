// Dependencies
import React from 'react';

// Material UI Components
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Made with ♥ by '}
      <Link color="inherit" href="https://github.com/Julian-Sequeira">
        Julian Sequeira
      </Link>{'. Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}