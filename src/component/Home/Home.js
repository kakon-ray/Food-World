import React, { useContext, useState } from "react";
import FoodCard from "../Card/FoodCard";
import RightSidebar from "../RightSidebar/RightSidebar";
import { userContext } from "../userContext/userContext";
import "./Home.css";
const Home = () => {
  const [foods, setUsers] = useContext(userContext);
  const [sidebarFood, setSidebarFood] = useState([]);

  const handleOrder = (food) => {
    setSidebarFood(food);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <div className="row g-3">
            {foods.map((food) => (
              <React.Fragment key={food.id}>
                <FoodCard
                  id={food.id}
                  name={food.name}
                  img={food.img}
                  food={food}
                  handleOrder={handleOrder}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
        <RightSidebar sidebarFood={sidebarFood} />
      </div>
    </div>
  );
};

export default Home;
