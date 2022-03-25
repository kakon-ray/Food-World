import React from "react";
import { Card } from "react-bootstrap";

const RightSidebar = ({ sidebarFood }) => {
  console.log(sidebarFood);
  return (
    <div className="sidebar col-4">
      <Card>
        <Card.Body>
          <h1>Selected Food</h1>
          <img src={sidebarFood.img ? sidebarFood.img : ""} alt="Food" />
        </Card.Body>
      </Card>
    </div>
  );
};

export default RightSidebar;
