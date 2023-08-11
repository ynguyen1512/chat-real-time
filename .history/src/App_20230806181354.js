import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppProvider from "./Context/AppProvider";

function App() {
  return (
    <BrowserRouter>
      {/* <AppProvider> */}
      <Routes>
        <Route component={Login} path="/login" />
        <Route component={ChatRoom} path="/" />
      </Routes>
      {/* </AppProvider> */}
    </BrowserRouter>
    // <Login />
  );
}

export default App;
