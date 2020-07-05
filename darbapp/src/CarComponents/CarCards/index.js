import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "./style.css";

const styles = {
  card: {
    margin: "0 20px"
  },
  media: {
    height: 140
  }
};

function CarCards(props) {
  const { classes, image, model, description, isMoving } = props;

  return (
    <a
      onClick={e => {
        if (isMoving) {
          e.preventDefault();
        }
      }}
      href='/'
    >
      <Card className='card-item-s'>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={model} />
          <p className='card-content-description-s'>{description}</p>
          <h3 className='card-content-model-s'>{model}</h3>
        </CardActionArea>
        <CardActions className='card-content-view-details-s'>
          <Button
            className='card-content-view-details-button-s'
            size='small'
            color='primary'
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </a>
  );
}

export default withStyles(styles)(CarCards);
