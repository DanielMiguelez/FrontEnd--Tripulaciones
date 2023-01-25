import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile";import New from "./components/New/New";
import Activities from "./components/Activities/Activities";
import Request from "./components/Request/Request";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/request" element={<Request />} />
          <Route path="/new" element={<New />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/updateprofile/:id" element={<EditProfile/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
