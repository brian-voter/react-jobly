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
 * props: none
 *
 * state:
 * * token: token or empty string
 * * user: current user object or null
 *
 * App => NavBar, RoutesList
 */
function App() {

  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  useEffect(function getUserOnTokenUpdate() {
    async function getUser() {
      JoblyApi.token = token;
      const user = await JoblyApi.getUser();
      setUser(user);
    }
    getUser();
  }, [token]);


  /**
   * Attempts to log the user in with the given credentials.
   * Sets the token if successful
   *
   * Error message string is thrown up if we receive an error from the backend
   *
   * @param {object} credentials { username, password }
   */
  async function login(credentials) {
    const newToken = await JoblyApi.login(credentials);
    setToken(newToken);
  }

  /**
   * Attempts to register a new user user in with the given data.
   * Sets the token if successful
   *
   * Error message string is thrown up if we receive an error from the backend
   *
   * @param {object} data { username, password }
   */
  async function signup(data) {
    const newToken = await JoblyApi.signup(data);
    setToken(newToken);
  }

  /**
   * Clears the token, which in turn will reset the user state to null
   */
  function logout() {
    setToken("");
  }

  return (
    <userContext.Provider value={{ user }}>
      {/* // <div className="image"> */}
      <div className="App" /*id="image"*/>

        <BrowserRouter>
          <NavBar logout={logout} />
          <div className="d-flex justify-content-center h-100">
            <RoutesList signup={signup} login={login} />

          </div>
        </BrowserRouter>
      </div>
      {/* // </div> */}
    </userContext.Provider>
  );
}

export default App;

