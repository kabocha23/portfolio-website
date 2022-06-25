
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
  cardActions: {
    justifyContent: 'center'
  }
};

const DragonGoCraft = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require('../Static/img/dragon-1.png')}
          title="Dragon Go Craft Preview"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Dragon Go Craft
          </Typography>
          <Typography component="h2">
            Swift, XCode, Core Location, Google Maps API
          </Typography>
          <Typography component="p">
          An iOS application created for a 24-hour hackathon; Find Dragons to defeat and capture with GPS tracking your movement through Google Maps API.
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Button size='large' color='primary' target='blank'>
          Private Repo
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

DragonGoCraft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DragonGoCraft);