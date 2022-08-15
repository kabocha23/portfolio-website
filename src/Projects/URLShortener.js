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
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    justifyContent: 'center'
  }
};

const URLShortener = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../Static/img/shortly-preview.png")}
          title="Shortly, URL Shortening Application"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Shortly
          </Typography>
          <Typography variant="caption" component="h2">
            React, Shrtcode API
          </Typography>
          <Typography component="p">
            A responsive web/mobile application that shortens the user's URL by tapping into the Shrtcode API.
          </Typography>
          <Typography component="p">
            Features include:
            - input allowing user to make API call and shorten any url
            - dynamically generated search history list with copy to clipboard button
            - navbar transitioning to hidden menu (sliding in from top)
            - responsive design for web and mobile
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Button size='large' color='primary' href='https://github.com/kabocha23/URL-Shortener' target='blank'>
          View Source Code
        </Button>
        <Button size='large' color='primary' href='https://kabocha23.github.io/URL-Shortener' target='blank'>
          Live Demo
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

URLShortener.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(URLShortener);