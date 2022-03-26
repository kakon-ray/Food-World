import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const FoodCard = ({ name, img, id, handleOrder, food }) => {
  return (
    <div className="col-md-4" key={id}>
      <Card style={{ minWidth: "15rem" }} className="text-center">
        <Card.Img variant="top" src={img} style={{ height: "250px" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <Button variant="light" onClick={() => handleOrder(food)}>
            Order Now
            <FontAwesomeIcon className="ms-2" icon={faShoppingCart} />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;
