// Dependencies
import React from 'react';
import PropTypes from 'proptypes';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Material UI Components
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

// Material UI Icons
import SearchIcon from '@material-ui/icons/Search';

// Custom Components
import LoginModal from '../Login/LoginModal.js';




/** 
 * Styling for our toolbar/header component 
 * Adapted from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/blog/Header.js
 */

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

// Define the header sections here
const sections = [
  // { title: 'Rules', url: '#' },
  { title: 'Current Book', url: '#' },
  { title: 'Discussion Questions (Spoilers)', url: '#' },
  { title: 'eBook Links', url: '#' },
  { title: 'Book Order', url: '#' },
  { title: 'Users', url: '#' },
  { title: 'Profile/Settings', url: '#' },
  { title: 'Suggestions', url: '#' }
];

// Define the title of the website
const title = "Literacy Adventures"

export default function Header(props) {
  const classes = useStyles();

  // Title of the site + header sections are passed here
  // const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button 
          size="small"
          href="https://github.com/Julian-Sequeira/literate-adventure"
        >
          Contribute
        </Button>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {/* <Button variant="outlined" size="small">
          Rules
        </Button> */}
        {/* <Button variant="outlined" size="small">
          Sign In
        </Button> */}
        <LoginModal />
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body1"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

// Defines type for arguments passed in as props
Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};