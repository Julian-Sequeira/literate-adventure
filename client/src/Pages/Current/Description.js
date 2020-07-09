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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800
  },
  header: {
    textAlign: "left"
  },
  body: {
    textAlign: "left"
  }
}))


export default function Description() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <CardHeader className={classes.header} title="Description"/> */}
      <CardContent className={classes.body}>
        <Typography gutterBottom variant="h5" component="h2">
            Description
        </Typography>
        <Typography variant="body1">
        <p>
        Sixteen-year-old Starr Carter moves 
        between two worlds: the poor neighborhood 
        where she lives and the fancy suburban prep 
        school she attends. The uneasy balance between 
        these worlds is shattered when Starr witnesses 
        the fatal shooting of her childhood best friend 
        Khalil at the hands of a police officer. 
        Khalil was unarmed.
        </p>
        <p>
        Soon afterward, his death is a national headline. Some 
        are calling him a thug, maybe even a drug dealer and a gangbanger. 
        Protesters are taking to the streets in Khalil’s name. Some cops 
        and the local drug lord try to intimidate Starr and her family. 
        What everyone wants to know is: what really went down that night? 
        And the only person alive who can answer that is Starr.
        </p>
        <p>
        But what Starr does—or does not—say could upend her community. 
        It could also endanger her life.
        </p>
        <p>
          <b>
          Inspired by the Black Lives Matter movement, this is a powerful 
          and gripping YA novel about one girl's struggle for justice. 
          </b>
        </p>
        </Typography>
      </CardContent>
    </Card>
  )


}