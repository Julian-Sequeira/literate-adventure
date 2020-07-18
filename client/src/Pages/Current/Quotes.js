// Dependencies
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

// Material UI Components
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

// Material UI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




// Styling the 'Quotes' and table container
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  table: {
    width: '100%'
  }
}))

// Styling the rows so they have alternating colours
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


// Mock data to make the table
// Will take this data from a database in the future
function dataWrap(quote) {
  return { quote }
}


const data = [
  dataWrap("Get me some beef ribs from Reuben's. And I want - Potato salad and fried okra"),
  dataWrap("I'm thinking, Oh so you can drag me to play basketball during one of your feminist rages, but you can't follow my Tumblr because of Emmett Till?"),
  dataWrap("After lunch we gather in the living room, join hands, and bow our heads. 'Black Jesus, thank you for this blessing,' Daddy says. ")
]

export default function Book() {
  const classes = useStyles();

  return (
    <Accordion className={classes.root}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
      >
        <Typography variant="h6">
          Quotes (Spoilers)
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Table className={classes.table} aria-label="quotes table">
          <TableBody>
            {data.map((row) => (
              <StyledTableRow>
                <StyledTableCell>
                  {row.quote}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>




        </Table>
      </AccordionDetails>
    </Accordion>
  )
}