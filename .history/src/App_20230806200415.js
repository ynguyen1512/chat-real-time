import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./Context/AppProvider";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route element={Login} path="/login" />
          <Route element={ChatRoom} path="/" />
        </Routes>
      </AppProvider>
    </BrowserRouter>
    // <Login />
  );
}

export default App;
