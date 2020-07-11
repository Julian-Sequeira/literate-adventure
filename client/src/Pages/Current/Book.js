// Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Material UI Icons


// Custom Components
import cover from '../../Images/THUG.jpg';

// CSS styling for the current book card
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '75%', // NOT 16:9
  }
}));

export default function Book() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="The Hate U Give" subheader="Angie Thomas"/>
      <CardMedia
        className={classes.media}
        image={cover}
        title="Book Cover"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          64,589 words
        </Typography>
      </CardContent>
    </Card>
  )
}