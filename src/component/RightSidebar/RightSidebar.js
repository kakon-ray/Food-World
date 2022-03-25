import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { foodSidebar } from "../userContext/foodSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./RightSidebar.css";

const RightSidebar = () => {
  const [sidebarFood, setFood] = useContext(foodSidebar);

  const handleRemove = (id) => {
    const newUser = sidebarFood.filter((users) => users.id !== id);
    setFood([...newUser]);
  };

  return (
    <div className="sidebar col-4">
      <h1 className="text-center mb-3">Selected Food</h1>
      {sidebarFood.map((food) => (
        <React.Fragment key={food.id}>
          <Card className="my-1">
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
    </div>
  );
};

export default RightSidebar;
