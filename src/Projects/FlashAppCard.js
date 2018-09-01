
// export const FlashAppCard = () => (
//   <Card className='card'>
//     <CardMedia>
//       <img 
//         src={ require('../Static/img/react-flashcards-app.png') } 
//         alt="reactnotes"
//       />
//     </CardMedia>
//     <CardTitle 
//       title="Flashcards App" 
//       subtitle="Technologies: React & Firebase" 
//     />
//     <CardText>
//       Application utilizing React and Firebase to have virtual flashcards for studying Chinese.
//     </CardText>
//     <CardActions>
//       <FlatButton label="View Source Code" href='https://bitbucket.org/Kabocha23/react-flashcards/src/master/' target='blank' />
//     </CardActions>
//   </Card>
// );


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

function FlashAppCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require('../Static/img/react-flashcards-app.png')}
          title="Flashcards Preview"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Learn in a Flash
          </Typography>
          <Typography component="h2">
            Technologies: React & Firebase
          </Typography>
          <Typography component="p">
            Web application utilizing React and Firebase to create virtual flashcards for studying (currently set up for Chinese).
          </Typography>
        </CardContent>
        <CardActions>
        <Button color='primary' href='https://bitbucket.org/Kabocha23/react-flashcards/src/master/' target='blank'>
          View Source Code
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

FlashAppCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlashAppCard);