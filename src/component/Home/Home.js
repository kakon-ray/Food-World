import React, { useContext } from "react";
import FoodCard from "../Card/FoodCard";
import { userContext } from "../userContext/userContext";

const Home = () => {
  const [foods, setUsers] = useContext(userContext);

  console.log(foods);
  return (
    <div className="container">
      <div className="row g-4 mt-3">
        {foods.map((food) => (
          <React.Fragment key={food.id}>
            <FoodCard id={food.id} name={food.name} img={food.img} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
