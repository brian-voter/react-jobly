import React, { useState } from "react";



function SignupForm({ signup }) {
  const initState = { //FIXME: remove these:
    username: 'test',
    password: 'test1',
    firstName: 'test',
    lastName: 'test',
    email: 'test@gmail.com'
  };
  const [data, setData] = useState(initState);

  function handleChange(evt) {
    setData(currState => ({ ...currState, [evt.target.name]: evt.target.value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    signup(data);
    setData(initState);
  }

  return (
    <div className="d-flex justify-content-center m-3">

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" value={data.username} onChange={handleChange} required></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={data.password} onChange={handleChange} required minLength={5}></input>
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" name="firstName" value={data.firstName} onChange={handleChange} required></input>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" name="lastName" value={data.lastName} onChange={handleChange} required></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={data.email} onChange={handleChange} required></input>
        </div>


        <button className="mx-2">Submit!</button>
      </form>
    </div>
  );
}
// end

export default SignupForm;
