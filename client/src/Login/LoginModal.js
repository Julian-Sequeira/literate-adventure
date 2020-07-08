// Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Components
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

// Custom Components
import LoginForm from './LoginForm.js';

// The position on the page where the modal gets opened
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// Styling for the modal, taken from https://material-ui.com/components/modal/
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {/* <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p> */}
      <LoginForm />
      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <div>
      <Button 
       variant="outlined"
       size="small" 
       onClick={handleOpen}
       >
        Sign In
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Login Form"
        aria-describedby="Login Form"
      >
        <Fade 
          in={open}
          number={{enter: 50, exit: 5}}
        >
          {body}
        </Fade> 
      </Modal>
    </div>
  );
}