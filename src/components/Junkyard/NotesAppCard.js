
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    justifyContent: 'center'
  }
};

const NotesAppCard = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../../Static/img/react-notes-app.png")}
          title="Notes!"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Notes!
          </Typography>
          <Typography component="h2">
            React, Firebase
          </Typography>
          <Typography component="p">
          A CRUD application for keeping notes, built with React and Firebase Realtime Database to help you keep reminders.
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Button size='large' color='primary' href='https://bitbucket.org/Kabocha23/react-notes/src/master/' target='blank'>
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