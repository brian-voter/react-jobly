import { NavLink } from "react-router-dom";




/**
 * NavBar
 *
 *
 * Link to companies jobs and homepage
 */


function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between p-2">
        <NavLink className="nav-link mx-1 fw-bold" to={'/'} end>Jobly</NavLink>
        <div className="d-flex justify-content-end gap-3">
          <NavLink className="nav-link" to={'/companies'} end>Companies</NavLink>
          <NavLink className="nav-link" to={'/jobs'} end>Jobs</NavLink>
        </div>
    </nav>
  );
}

export default NavBar;

