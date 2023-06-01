import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function LoginForm({ login }) {
  const initState = { //FIXME: remove these:
    username: 'test',
    password: 'test1',
    error: null
  };
  const [data, setData] = useState(initState);

  function handleChange(evt) {
    setData(currState => ({ ...currState, [evt.target.name]: evt.target.value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await login(data);
      setData(initState);
    } catch (errorMsg) {
      console.log("error in form: ", errorMsg);
      setData(currentData =>
        ({ ...currentData, password: "", error: errorMsg })
      );
    }
  }

  return (
    <div className="d-flex justify-content-center m-3">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        {data.error && <Alert variant="danger">{data.error}</Alert>}
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" value={data.username} onChange={handleChange} required></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={data.password} onChange={handleChange} required></input>
        </div>

        <button className="mx-2">Submit!</button>
      </form>
    </div>

  );
}
// end

export default LoginForm;
