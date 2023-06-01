import React, { useState } from "react";



function ProfileForm({ submit }) {
  const initState = {
    username:'',
    firstName:'',
    lastName:'',
    email:''
}
  const [data, setData] = useState(initState);

  function handleChange(evt) {
    setData(currState => ({...currState, [evt.target.name]:evt.target.value}))
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    submit(data);
    setData(initState);
  }

  return (
    <div className="d-flex justify-content-center m-3">

      <form onSubmit={handleSubmit}>

        <label for="username">Username</label>
        <input id="username" type="text" name="username" value={data.username} onChange={handleChange}></input>

        <label for="password">Password</label>
        <input id="password" type="password" name="password" value={data.password} onChange={handleChange}></input>

        <label for="firstName">First Name</label>
        <input id="firstName" type="text" name="firstName" value={data.firstName} onChange={handleChange}></input>

        <label for="lastName">Last Name</label>
        <input id="lastName" type="text" name="lastName" value={data.lastName} onChange={handleChange}></input>

        <label for="email">Email</label>
        <input id="email" type="email" name="email" value={data.email} onChange={handleChange}></input>


        <button className="mx-2">Submit!</button>
      </form>
    </div>
  );
}
// end

export default SignupForm;
