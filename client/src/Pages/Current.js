// Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

// Material UI Icons


// Custom Components
import cover from '../Images/THUG.jpg';

// CSS styling for the current book card
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '75%', // NOT 16:9
  }
}));

export default function Current() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="The Hate U Give" subheader="Angie Thomas"/>
      <CardMedia
        className={classes.media}
        // style={{height: 0, paddingTop: '56.25%'}}
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