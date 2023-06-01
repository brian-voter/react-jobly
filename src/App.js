import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import userContext from "./userContext";
import jwt_decode from "jwt-decode";



/**
 * App
 *
 *App => NavBar,RoutesList
 *
 *
 *  */
function App() {

  const [token, setToken] = useState("");
  const [user, setUser] = useState(null)


  useEffect(function getUserOnTokenUpdate(){
    async function getUser(){
     JoblyApi.token = token;
      setUser()
    }

  },[token]);


  function login(data){

  }

  function signup(data){
    setToken(JoblyApi.signup(data));
  }



  function logout(){


  }
  return (
    <userContext.Provider value={{user}}>
      {/* // <div className="image"> */}
    <div className="App" id="image">

      <BrowserRouter>
        <NavBar />
        <div className="d-flex justify-content-center h-100">
          <RoutesList />

        </div>
      </BrowserRouter>
    </div>
    {/* // </div> */}
    </userContext.Provider>
  );
}

export default App;

