import React, { useState } from "react";



function LoginForm({ login }) {
  const initState = {
    username:'',
    password:'',
}
  const [data, setData] = useState(initState);

  function handleChange(evt) {
    setData(currState => ({...currState, [evt.target.name]:evt.target.value}))
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    login(data);
    setData(initState);
  }

  return (
    <div className="d-flex justify-content-center m-3">
      <h1>Log In</h1>

      <form onSubmit={handleSubmit}>

        <label for="username">Username</label>
        <input id="username" type="text" name="username" value={data.username} onChange={handleChange} required></input>

        <label for="password">Password</label>
        <input id="password" type="password" name="password" value={data.password} onChange={handleChange} required></input>


        <button className="mx-2">Submit!</button>
      </form>
    </div>
  );
}
// end

export default LoginForm;
