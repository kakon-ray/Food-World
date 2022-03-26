import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { UserProvider } from "./component/userContext/userContext";
import Home from "./component/Home/Home";
import { FoodProvider } from "./component/userContext/foodSidebar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserProvider>
      <FoodProvider>
        <ToastContainer position="top-center" />
        <Home />
      </FoodProvider>
    </UserProvider>
  );
}

export default App;
