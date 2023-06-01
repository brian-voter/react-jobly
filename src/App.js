import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";

/**
 * App
 *
 *App => NavBar,RoutesList
 *
 *
 *  */
function App() {
  return (
      // <div className="image">
    <div className="App" id="image">

      <BrowserRouter>
        <NavBar />
        <div className="d-flex justify-content-center h-100">
          <RoutesList />

        </div>
      </BrowserRouter>
    </div>
    // </div>

  );
}

export default App;

