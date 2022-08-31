
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

const WeatherAppCard = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../../Static/img/react-weather-app.png")}
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
        <CardActions className={classes.cardActions}>
        <Button size='large' color='primary' href='https://bitbucket.org/Kabocha23/react-weather/src/master/' target='blank'>
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