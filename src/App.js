import React from "react";
import "./App.css";
import Register from "./components/Register/Register";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/updateprofile/:id" element={<EditProfile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
