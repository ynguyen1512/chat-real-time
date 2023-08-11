import "./App.css";
import Login from "./components/Login";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return(
  <BrowserRouter>
    <Switch>
      <Route component={Login} path="/login" />
      <Route component={ChatRoom} path="/" />
    </Switch>
  </BrowserRouter>;
  )
}

export default App;
