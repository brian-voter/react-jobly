import { NavLink, useNavigate , Link} from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import "./NavBar.css"

/**
 * NavBar
 *
 * PROPS:
 * * logout - function to log the user out
 *
 * Links to companies jobs and homepage if logged in, otherwise
 * links to signup/login pages
 */
function NavBar({ logout }) {

  const { user } = useContext(userContext);

  const navigate = useNavigate();

  function onClickLogout(evt) {
    evt.preventDefault();
    logout();
    navigate("/");
  }


  function loggedIn(){
    return (
      <div className="d-flex justify-content-end gap-3">
          <NavLink className="nav-link" to={'/companies'}  end>Companies</NavLink>
          <NavLink className="nav-link" to={'/jobs'} end>Jobs</NavLink>
          <NavLink className="nav-link" to={'/profile'} end>Profile</NavLink>
          <Link className="nav-link" onClick={onClickLogout} >Log out {user.username}</Link>
        </div>
    )
  }

  function notLoggedIn(){
    return (
      <div className="d-flex justify-content-end gap-3">
          <NavLink className="nav-link" to={'/login'} end>Login</NavLink>
          <NavLink className="nav-link" to={'/signup'} end>Sign Up</NavLink>
        </div>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between p-2">
      <NavLink className="nav-link mx-1 fw-bold" to={'/'}  end>Jobly</NavLink>
      {user ? loggedIn() : notLoggedIn()}
    </nav>
  );
}

export default NavBar;

