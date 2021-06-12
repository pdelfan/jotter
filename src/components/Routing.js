import React, { useEffect } from "react";
import { useAuth0 } from "../services/auth";
import { navigate } from "gatsby";
import Library from "../pages/library";

// redirect

export const RedirectHome = ({ component: Component, ...rest }) => {
  navigate("/");
  return <Library />;
};

// redirect if user isn't logged in (authenticated)

export const RedirectToLibrary = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    navigate("/library");
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  return isAuthenticated === true ? <Component {...rest} /> : null;
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
