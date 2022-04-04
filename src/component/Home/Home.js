import React, { useContext, useState } from "react";
import FoodCard from "../Card/FoodCard";
import RightSidebar from "../RightSidebar/RightSidebar";
import { foodSidebar } from "../userContext/foodSidebar";
import { userContext } from "../userContext/userContext";
import "./Home.css";
import { toast } from "react-toastify";

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
    if (repetfood.length === 0 && sidebarFood.length < 4) {
      setFood([
        ...sidebarFood,
        {
          name: food.name,
          img: food.img,
          id: food.id,
        },
      ]);
    } else if (repetfood.length > 0) {
      toast.error("You do not repeat one item more time");
    } else if (sidebarFood.length > 3) {
      toast.error("You do not add more then four item");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center text-info">Panda Mart</h1>

      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="row g-2">
            {foods.map((food) => (
              <React.Fragment key={food.id}>
                <FoodCard
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  img={food.img}
                  food={food}
                  handleOrder={handleOrder}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="sidebar col-md-4 col-sm-12">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
