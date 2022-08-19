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