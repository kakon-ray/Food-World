import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { UserProvider } from "./component/userContext/userContext";
import Home from "./component/Home/Home";

function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}

export default App;
