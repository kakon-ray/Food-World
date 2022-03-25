import React from "react";
import { Card, Button } from "react-bootstrap";

const FoodCard = ({ name, img, id }) => {
  return (
    <div className="col-md-4" key={id}>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={img} style={{ height: "250px" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Button variant="primary">Order Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;
