import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import userContext from "./userContext";
import jwtDecode from "jwt-decode";
import Loading from "./Loading";

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
const TOKEN_STORAGE_KEY = "jobly_token";
function App() {

  const [token, setToken] = useState(localStorage.getItem(TOKEN_STORAGE_KEY) || "");
  //user is undefined when Loading, and toggle to null when not logged in.
  const [user, setUser] = useState(undefined);


  useEffect(function getUserOnTokenUpdate() {

    async function getUser() {
      JoblyApi.token = token;
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      if (!token){
        setUser(null);
        return;
      }
      const decoded = jwtDecode(token);
      const username = decoded.username;

      const user = await JoblyApi.getUser(username);
      setUser(user);
    }
    getUser();
  }, [token]);



if ( user === undefined){
  return <Loading/>
}



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
/** update the profile with the data from user */
  async function updateProfile(data){
    const newProfile = await JoblyApi.updateUserProfile(data, user.username);
    setUser(newProfile)
  }

  return (
    <userContext.Provider value={{ user }}>

      <div className="App">

        <BrowserRouter>
          <NavBar logout={logout} />
          <div className="d-flex justify-content-center">
            <RoutesList signup={signup} login={login} updateProfile={updateProfile} />

          </div>
        </BrowserRouter>
      </div>

    </userContext.Provider>
  );
}

export default App;

