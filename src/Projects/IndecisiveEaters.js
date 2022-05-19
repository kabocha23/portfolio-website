import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
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

const IndecisiveEaters = (props) => {
  const { classes, handleImageZoom } = props;
  return (
    <div>
      <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={require("../Static/img/indecisive-eaters1.png")}
            title="Indecisive Eaters"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h1">
              Indecisive Eaters
            </Typography>
            <Typography component="h2">
              React, Node, Express, Yelp-Fusion API, Axios, React DnD, reactjs-popup
            </Typography>
            <Typography component="p">
              A web application made for those who can't decide where to eat. Search for restaurants with Yelp-Fusion API, and drag the desired restaurants to the list on the right. When you're ready to go, the computer will randomly chose one for you!
            </Typography>
          </CardContent>
        <CardActions>
        <Button color='primary' href='https://github.com/kabocha23/Indecisive' target='blank'>
          View Source Code
        </Button>
        <Button color='primary' href='https://whispering-forest-79782.herokuapp.com' target='blank'>
          Live Demo
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

IndecisiveEaters.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndecisiveEaters);