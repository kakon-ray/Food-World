import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { UserProvider } from "./component/userContext/userContext";
import Home from "./component/Home/Home";
import { FoodProvider } from "./component/userContext/foodSidebar";

function App() {
  return (
    <UserProvider>
      <FoodProvider>
        <Home />
      </FoodProvider>
    </UserProvider>
  );
}

export default App;
