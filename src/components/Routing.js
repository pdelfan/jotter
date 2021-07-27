import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { navigate } from "gatsby";
import Library from "../pages/index";
import Login from "../pages/login";

// redirect
export const RedirectHome = ({ component: Component, ...rest }) => {
  navigate("/");
  return <Library />;
};

export const RedirectToLogin = () => {
  const { loading, isAuthenticated } = useAuth0();
  if (loading || isAuthenticated) {
    return null;
  }
  navigate("/login");
  return <Login />;
};


const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    navigate("/");
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  return isAuthenticated === true ? <Component {...rest} /> : null;
};

export default PrivateRoute;
