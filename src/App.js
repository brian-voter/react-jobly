import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

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
    <div>
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>

    </div>
  );
}

export default App;

