import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import userContext from "./userContext";

/**
 * App
 *
 *App => NavBar,RoutesList
 *
 *
 *  */
function App() {

  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  useEffect(function getUserOnTokenUpdate() {
    async function getUser() {
      JoblyApi.token = token;
      const user = await JoblyApi.getUser();
      console.log("user: ", user);
      setUser(user);
    }
    getUser();
  }, [token]);


  //TODO: docstrings!!!
  async function login(data) {
    const newToken = await JoblyApi.login(data);
    console.log("token: ", newToken);
    setToken(newToken);
  }

  async function signup(data) {
    const newToken = await JoblyApi.signup(data);
    console.log("token: ", newToken);
    setToken(newToken);
  }


  function logout() {
    setToken("");
  }

  return (
    <userContext.Provider value={{user}}>
      {/* // <div className="image"> */}
      <div className="App" /*id="image"*/>

        <BrowserRouter>
          <NavBar logout={logout}/>
          <div className="d-flex justify-content-center h-100">
            <RoutesList signup={signup} login={login}/>

          </div>
        </BrowserRouter>
      </div>
      {/* // </div> */}
    </userContext.Provider>
  );
}

export default App;

