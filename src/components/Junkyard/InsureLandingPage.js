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

const InsureLandingPage = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../../Static/img/insure-preview-1.png")}
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