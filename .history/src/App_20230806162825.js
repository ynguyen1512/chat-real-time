import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return;
  <BrowserRouter>
    <Switch>
      <Route component={Login} path="/login" />
      <Route component={ChatRoom} path="/" />
    </Switch>
  </BrowserRouter>;
}

export default App;
