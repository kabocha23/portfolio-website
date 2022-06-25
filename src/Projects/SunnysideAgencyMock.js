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

const SunnysideAgencyMock = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../Static/img/desktop-preview.jpg")}
          title="Sunnyside Agency Preview"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Sunnyside Agency Website
          </Typography>
          <Typography component="h2">
            React
          </Typography>
          <Typography component="p">
          A responsive front end design for a fictional creative agency.
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Button size='large' color='primary' href='https://github.com/kabocha23/Sunnyside-Agency-Site' target='blank'>
          View Source Code
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SunnysideAgencyMock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SunnysideAgencyMock);