import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import AddRoomModal from "./components/Modals/AddRoomModal";
import InviteMemberModal from "./components/Modals/InviteMemberModal";
import RemoveRoomModal from "./components/Modals/RemoveRoomModal";
import VideoCallModal from "./components/Modals/VideoCallModal";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<ChatRoom />} path="/" />
          </Routes>
          <AddRoomModal />
          <RemoveRoomModal />
          <InviteMemberModal />
          <VideoCallModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
