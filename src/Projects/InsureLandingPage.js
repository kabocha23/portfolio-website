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
  },
  cardActions: {
    justifyContent: 'center'
  }
};

const InsureLandingPage = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../Static/img/insure-preview-1.png")}
          title="Insurance Company Landing Page"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Insurance Company Landing Page
          </Typography>
          <Typography variant="caption" component="h2">
            React
          </Typography>
          <Typography component="p">
            A responsive landing page for a fictional insurance company. No libraries imported for this project.
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Button size='large' color='primary' href='https://github.com/kabocha23/Insure-Landing-Page' target='blank'>
          View Source Code
        </Button>
        <Button size='large' color='primary' href='https://kabocha23.github.io/Insure-Landing-Page' target='blank'>
          Live Demo
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

InsureLandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsureLandingPage);