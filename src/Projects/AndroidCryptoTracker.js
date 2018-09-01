
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

function AndroidCryptoTracker(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require('../Static/img/react-native-crypto.png')}
          title="Cryptocurrency Tracker Preview"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Cryptocurrency Tracker for Android
          </Typography>
          <Typography component="h2">
            Technologies: Coin Market Cap API, React Native, Android Studios
          </Typography>
          <Typography component="p">
            Android application built with React Native, calling the Coin Market Cap API for real-time quotes.
          </Typography>
        </CardContent>
        <CardActions>
        <Button color='primary' href='https://github.com/kabocha23/React-Native-Crypto-Tracker' target='blank'>
          View Source Code
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

AndroidCryptoTracker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AndroidCryptoTracker);