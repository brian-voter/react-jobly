import React, { useState, useContext } from "react";
import userContext from "./userContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";


/**
 * ProfileForm
 *
 * props: updateProfile: function taking
 *          { firstName, lastName, email }
 *
 * state:
 * * data: current form state
 * * error: any error received from the backend
 *
 * RoutesList => ProfileForm
 */
function ProfileForm({ updateProfile }) {

   const { user } = useContext(userContext);
   const navigate = useNavigate();

  const initState = {
    firstName:user.firstName,
    lastName:user.lastName,
    email:user.email
}
  const [data, setData] = useState(initState);//TODO: call formData
  const [error, setError] = useState(null);

  function handleChange(evt) {
    setData(currState => ({ ...currState, [evt.target.name]: evt.target.value }));
  }

  /**
  * on submit, attempt to update and navigate to "/" if successful, else
  * display the error received
  */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await updateProfile(data);

    } catch (errorMsg) {
      return setError(errorMsg);
    }
    navigate("/"); //TODO:
  }


  return (
    <div className="d-flex flex-column justify-content-start m-5 ">

    <p>Profile</p> FIXME: url/companies when logged in, have some flash message, emoji

      <form onSubmit={handleSubmit} className="d-flex flex-column m-3 align-items-start text-start gap-2 fw-bold">

      {error && <Alert variant="danger">{error}</Alert>}

        <div><label htmlFor="username">Username</label><br/>
        <input id="username" type="text" name="username" value={user.username} disabled></input></div>

        <div><label htmlFor="firstName">First Name</label><br/>
        <input id="firstName" type="text" name="firstName" value={data.firstName} onChange={handleChange} minLength="1" ></input></div>

        <div><label htmlFor="lastName">Last Name</label><br/>
        <input id="lastName" type="text" name="lastName" value={data.lastName} onChange={handleChange} minLength="1"></input></div>

        <div><label htmlFor="email">Email</label><br/>
        <input id="email" type="email" name="email" value={data.email} onChange={handleChange} minLength="1"></input></div>


        <button className="mt-4 w-100 btn btn-primary">Submit!</button>
      </form>
    </div>
  );
}


export default ProfileForm;
