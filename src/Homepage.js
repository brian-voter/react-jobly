import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";


/**
 * Homepage
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
      <Link to="/signup"  className="p-0 px-3 border border-primary" >Sign Up </Link>
      <Link  to="/login"  className="p-0 px-3 border border-primary" >Log In </Link>
      </div>
       : `Welcome to Jobly ${user.firstName}`

      }


    </div>
  )
}

export default Homepage