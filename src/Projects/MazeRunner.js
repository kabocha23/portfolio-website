import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const MazeRunner = () => (
  <Card>
    <CardHeader
      title="Maze Runner"
      avatar={ require('../Static/img/profile-photo2.jpg') } 
    />
    <CardMedia
      // overlay={
      //   <CardTitle 
      //     title="Flashcards App" 
      //     subtitle="Technologies: React & Firebase" 
      //   />
      // }
    >
      <img 
        src={ require('../Static/img/profile-photo2.jpg') } 
        alt="reactnotes"
      />
    </CardMedia>
    <CardTitle 
      title="Maze Runner" 
      subtitle="Swift, XCode, Core Motion" 
    />
    <CardText>
      An iOS application created for another 24-hour hackathon; Use core motion to move your runner through an endless guantlet of mazes, scoring points for every step. Run out of steps and it's game over.
    </CardText>
    <CardActions className={classes.cardActions}>
      <FlatButton label="View Source Code" href='https://github.com/kabocha23/Swift/tree/master/MazeRunner-master' target='blank' />
    </CardActions>
  </Card>
);

