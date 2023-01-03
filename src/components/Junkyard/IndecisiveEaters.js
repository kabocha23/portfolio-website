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

const IndecisiveEaters = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={require("../../Static/img/indecisive-eaters1.png")}
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
        <CardActions className={classes.cardActions}>
        <Button size='large' color='primary' href='https://github.com/kabocha23/Indecisive' target='blank'>
          View Source Code
        </Button>
        <Button size='large' color='primary' href='https://whispering-forest-79782.herokuapp.com' target='blank'>
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