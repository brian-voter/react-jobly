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
import { useContext } from "react";
import userContext from "./userContext";

/**Routes list
 *
 * PROPS:
 * * signup - signup function
 * * login - login function
 *
 *
 * routes:
 * "/" => <Homepage  />
 *
 * LOGGED IN:
 * * "/companies" => <CompanyList />
 * * "/companies/:company" => <CompanyDetail/>
 * * "/jobs" => <JobList />
 *
 * NOT LOGGED IN:
 * * "/login" => <LoginForm />
 * * "/signup" <SignupForm />
 * * "/profile" <ProfileForm />
 *
 *
 * * "/*" => <Navigate to="/" />: if none of the above go back to homepage
 *
 */
function RoutesList({ signup, login , updateProfile}) {

  const { user } = useContext(userContext);


  return (<Routes>

    {user ? <>
      <Route
        path="/"
        element={<Homepage />}
      />
      <Route
        path="/companies"
        element={<CompanyList />}
      />
      <Route
        path="/companies/:company"
        element={<CompanyDetail />}
      />
      <Route
        path="/jobs"
        element={<JobList />}
      />
      <Route
        path="/profile"
        element={<ProfileForm  updateProfile={updateProfile} />}
      />
      <Route
        path="/*"
        element={<Navigate to="/" />}
      />
    </>
      : <> <Route
        path="/"
        element={<Homepage />}
      />
        <Route
          path="/login"
          element={<LoginForm login={login} />}
        />
        <Route
          path="/signup"
          element={<SignupForm signup={signup} />}
        />
        <Route
          path="/*"
          element={<Navigate to="/" />}
        />
      </>}
  </Routes>
  );


}

export default RoutesList;