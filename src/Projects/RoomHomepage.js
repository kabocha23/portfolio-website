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
  }
};

const RoomHomepage = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require('../Static/img/room-preview.png')}
          title="Room Homepage"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Room Homepage
          </Typography>
          <Typography variant="caption" component="h2">
            React
          </Typography>
          <Typography component="p">
          A responsive web/mobile design homepage for a fictional furniture company. Features include navbar transitioning to hidden menu (sliding in from top), selectable homepage components, modern design.
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Button size='large' color='primary' href='https://github.com/kabocha23/Room-Homepage/' target='blank'>
          View Source Code
        </Button>
        <Button size='large' color='primary' href='https://kabocha23.github.io/Room-Homepage/' target='blank'>
          Live Demo
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

RoomHomepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoomHomepage);