import "./App.css";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route component={Login} path="/login" />
        <Route component={ChatRoom} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
