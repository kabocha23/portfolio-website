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