import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';

/**Routes list
 *
 * PROPS:
 * * signup - signup function
 * * login - login function
 *
 *
 * routes:
 * "/" => <Homepage  />
 * "/companies" => <CompanyList />
 * "/companies/:company" => <CompanyDetail/>
 * "/jobs" => <JobList />
 * "/*" => <Navigate to="/" />: if none of the above go back to homepage
 *
 */

function RoutesList({ signup, login }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage  />}
      />

      <Route
        path="/companies"
        element={<CompanyList />}
      />
      <Route
        path="/companies/:company"
        element={<CompanyDetail/>}
      />
      <Route
        path="/jobs"
        element={<JobList />}
      />

      <Route
        path="/login"
        element={<LoginForm login={login}/>}
      />
      <Route
        path="/signup"
        element={<SignupForm signup={signup}/>}
      />
      <Route
        path="/profile"
        element={<ProfileForm />}
      />
      <Route
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default RoutesList