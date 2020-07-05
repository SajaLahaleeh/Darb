import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "./style.css"

const styles = {
  card: {
    margin: "0 20px",
  },
  media: {
    height: 140
  },
};

function Cards(props) {
  const { classes, image, title, description, isMoving, date } = props;

  return (
    <a onClick={(e) => {
      if (isMoving) {
        e.preventDefault();
      }
    }} href='/' >
      <Card className="card-item">
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={title} />
          <h3 className="card-content-title">
            {title}
          </h3>
          <p className="card-content-description">
            {description}
          </p>
          <h6 className="card-content-validation">
            Valid till : {date}
          </h6>
        </CardActionArea>
        <CardActions className="card-content-view-details" >
          <Button className="card-content-view-details-button" size="small" color="primary" style={{
            color: '#46BCBB',
            width: '40 %',
            marginTop: '8%'

          }}>
            View Details
        </Button>
        </CardActions>
      </Card>
    </a >
  );
}

export default withStyles(styles)(Cards);