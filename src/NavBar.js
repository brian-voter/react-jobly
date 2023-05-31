import { NavLink } from "react-router-dom";




/**
 * NavBar
 *
 *
 * Link to companies jobs and homepage
 */


function NavBar() {

  return (
    <nav>
      <NavLink to={'/'} end>Jobly</NavLink>
      <NavLink to={'/companies'} end>Companies</NavLink>
      <NavLink to={'/jobs'} end>Jobs</NavLink>
    </nav>
  );
}

export default NavBar;

