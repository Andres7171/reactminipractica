import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DoctoresEspecialidad from "./DoctoresEspecialidad";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/doctores" element={<DoctoresEspecialidad/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
