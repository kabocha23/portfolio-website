
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

const WeatherAppCard = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../Static/img/react-weather-app.png")}
          title="Weather Preview"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Weather You Like It or Not
          </Typography>
          <Typography component="h2">
            React, Open Weather API
          </Typography>
          <Typography component="p">
            Application created with React and OpenWeatherMap API to look up the current weather, or a five day forecast.
          </Typography>
        </CardContent>
        <CardActions>
        <Button color='primary' href='https://bitbucket.org/Kabocha23/react-weather/src/master/' target='blank'>
          View Source Code
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

WeatherAppCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherAppCard);