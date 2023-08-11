import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <AppProvider> */}
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<ChatRoom />} path="/" />
        </Routes>
        {/* </AppProvider> */}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
