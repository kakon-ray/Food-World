import React, { useContext, useState } from "react";
import FoodCard from "../Card/FoodCard";
import RightSidebar from "../RightSidebar/RightSidebar";
import { foodSidebar } from "../userContext/foodSidebar";
import { userContext } from "../userContext/userContext";
import "./Home.css";
import { toast } from "react-toastify";
import QuestionAns from "../QuestionAns/QuestionAns";

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
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="row g-2">
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
          <div className="row my-4 g-3">
            <QuestionAns
              title="How React Work ?"
              description="React is JavaScript  Library.React js use to create fornt end web application and user interface.React work one way data binding. This means parent component share data to child component.Child component do not shre data parent component use props.If any person shere data child component to parent componet to use React hooks,context api and mathod paramiter"
            />
            <QuestionAns
              title="Difference between props and state ?"
              description="Props use shere data component to another component. Useing props shere data child component to parent component.State work change data in user interface. State change data user responce but props does not chnage valu.If ever props value change react gives a error."
            />
            <QuestionAns
              title="How useState work ? "
              description="useState is react hook in function component.useState hooks work to state change.if ever change state in function component react js then need to useState hooks"
            />
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
