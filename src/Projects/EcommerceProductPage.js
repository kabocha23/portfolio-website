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

const EcommerceProductPage = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../Static/img/sneakers2.png")}
          title="E-commerce Product Page"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Sneakers Product Page
          </Typography>
          <Typography variant="caption" component="h2">
            React
          </Typography>
          <Typography component="p">
          A responsive product page web and mobile design for a fictional e-commerce website Sneakers Company. Features include navbar transitioning to collapsible sidebar, selectible photo gallery, cart with CRUD functionality, live cart quantity bubble.
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Button size='large' color='primary' href='https://github.com/kabocha23/Ecommerce-Product-Page' target='blank'>
          View Source Code
        </Button>
        <Button size='large' color='primary' href='https://kabocha23.github.io/Ecommerce-Product-Page' target='blank'>
          Live Demo
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

EcommerceProductPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EcommerceProductPage);