import React, { useContext, useState } from "react";
import FoodCard from "../Card/FoodCard";
import RightSidebar from "../RightSidebar/RightSidebar";
import { foodSidebar } from "../userContext/foodSidebar";
import { userContext } from "../userContext/userContext";
import "./Home.css";
const Home = () => {
  // this context api data loaded database
  const [foods, setUsers] = useContext(userContext);
  // this context api and data shere RightSidebar Component
  const [sidebarFood, setFood] = useContext(foodSidebar);

  const handleOrder = (food) => {
    //   repeted food item error fixt
    const repetfood = sidebarFood.filter((item) => {
      return item.id === food.id;
    });

    // this condition check food id Whether there is before
    //if false into this condition then true then do not add food
    if (repetfood.length === 0) {
      setFood([
        ...sidebarFood,
        {
          name: food.name,
          img: food.img,
          id: food.id,
        },
      ]);
    } else if (repetfood.length > 0) {
    }
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
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
