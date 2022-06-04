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
          <Typography component="h2">
            React
          </Typography>
          <Typography component="p">
          A responsive product page web and mobile design for a fictional e-commerce website Sneakers Company. Features include navbar transitioning to collapsible sidebar, selectible photo gallery, cart with CRUD functionality, live cart quantity bubble.
          </Typography>
        </CardContent>
        <CardActions>
        <Button color='primary' href='https://github.com/kabocha23/Ecommerce-Product-Page' target='blank'>
          View Source Code
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