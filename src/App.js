import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import New from "./components/New/New";
import Activities from "./components/Activities/Activities";
import Request from "./components/Request/Request";
import Header from "./components/Header/Header";


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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
