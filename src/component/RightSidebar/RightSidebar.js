import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { foodSidebar } from "../userContext/foodSidebar";

const RightSidebar = () => {
  const [sidebarFood, setFood] = useContext(foodSidebar);
  // console.log(sidebarFood);
  return (
    <div className="sidebar col-4">
      <h1 className="text-center">Selected Food</h1>
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
            </Card.Body>
          </Card>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RightSidebar;
