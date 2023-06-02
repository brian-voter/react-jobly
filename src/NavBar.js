import { useNavigate , Link} from "react-router-dom";
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
          <Link className="nav-link" to={'/companies'} >Companies</Link>
          <Link className="nav-link" to={'/jobs'}>Jobs</Link>
          <Link className="nav-link" to={'/profile'}>Profile</Link>
          <Link className="nav-link" onClick={onClickLogout} >Log out {user.username}</Link>
        </div>
    )
  }

  function notLoggedIn(){
    return (
      <div className="d-flex justify-content-end gap-3">
          <Link className="nav-link" to={'/login'}>Login</Link>
          <Link className="nav-link" to={'/signup'}>Sign Up</Link>
        </div>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between p-2">
      <Link className="nav-link mx-1 fw-bold" to={'/'}>Jobly</Link>
      {user ? loggedIn() : notLoggedIn()}
    </nav>
  );
}

export default NavBar;

