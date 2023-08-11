import "./App.css";
import Login from "./components/Login";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return;
  <BrowserRouter>
    <Switch>
      <Route Component={Login} path="/login" />
    </Switch>
  </BrowserRouter>;
}

export default App;
