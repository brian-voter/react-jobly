import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";


/**
 * Homepage
 *
 * displays login/signup buttons if not logged in
 *
 */
function Homepage(){

  const { user } = useContext(userContext);

  return (
    <div className="text-center d-flex flex-column justify-content-center h-100 ">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {!user ?
      <div>
      <Link to="/signup"  className="m-2 btn btn-primary" >Sign Up </Link>
      <Link  to="/login"  className="m-2 btn btn-primary" >Log In </Link>
      </div>
       : `Welcome to Jobly, ${user.firstName}!`
      }
    </div>
  )
}

export default Homepage