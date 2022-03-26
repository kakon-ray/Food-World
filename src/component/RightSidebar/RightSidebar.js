import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { foodSidebar } from "../userContext/foodSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./RightSidebar.css";

const RightSidebar = () => {
  const [sidebarFood, setFood] = useContext(foodSidebar);
  const [randomOneFood, setRandomFood] = useState([]);

  const handleRemove = (id) => {
    const newUser = sidebarFood.filter((users) => users.id !== id);
    setFood([...newUser]);
  };

  // this mathod random food calculation
  const randomFood = () => {
    if (sidebarFood.length > 0) {
      const newRandomFood =
        sidebarFood[Math.floor(Math.random() * sidebarFood.length + 1)];

      if (newRandomFood != undefined) {
        setRandomFood(newRandomFood);
      } else if (newRandomFood == undefined) {
        let random = sidebarFood.find((item, indx) => {
          return indx == Math.floor(Math.random() * sidebarFood.length);
        });
        setRandomFood(random);
      }
    }
  };

  const clearFood = () => {
    setFood([]);
  };
  return (
    <div>
      <h1 className="text-center pt-3">Selected Food</h1>
      {sidebarFood.map((food) => (
        <React.Fragment key={food.id}>
          <Card className="my-1 card">
            <Card.Body className="d-flex align-items-center">
              <img
                src={food.img ? food.img : ""}
                alt="Food"
                style={{ width: "100px" }}
              />
              <h4 className="ps-2">{food.name}</h4>

              <Button variant="">
                <FontAwesomeIcon
                  className="ms-4"
                  icon={faTrash}
                  onClick={() => handleRemove(food.id)}
                />
              </Button>
            </Card.Body>
          </Card>
        </React.Fragment>
      ))}

      <div className="mt-5">
        <h2 className="text-center">Tasty Food Choose </h2>

        <Card className="my-1 card">
          <Card.Body className="d-flex align-items-center">
            <img src={randomOneFood?.img} alt="" style={{ width: "100px" }} />
            <h4 className="ps-2">{randomOneFood?.name}</h4>
          </Card.Body>
        </Card>
      </div>

      <div className="d-flex justify-content-center">
        <Button variant="outline-info m-1" onClick={() => randomFood()}>
          Choose 1 For Me
        </Button>
        <Button variant="outline-info m-1" onClick={clearFood}>
          Choose Again
        </Button>
      </div>
    </div>
  );
};

export default RightSidebar;
