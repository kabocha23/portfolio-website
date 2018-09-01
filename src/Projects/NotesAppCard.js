
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function NotesAppCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../Static/img/react-notes-app.png")}
          title="Notes Preview"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Notes!
          </Typography>
          <Typography component="h2">
            Technologies: React & Firebase
          </Typography>
          <Typography component="p">
            Notes application built with React and Firebase to help you keep reminders.
          </Typography>
        </CardContent>
        <CardActions>
        <Button color='prmary' href='https://bitbucket.org/Kabocha23/react-notes/src/master/' target='blank'>
          View Source Code
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

NotesAppCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotesAppCard);