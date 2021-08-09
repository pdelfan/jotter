import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { navigate } from "gatsby";
import Library from "../pages/index";
import About from "../pages/about";

export const RedirectHome = ({ component: Component, ...rest }) => {
  navigate("/");
  return <Library />;
};

export const RedirectToLogin = () => {
  const { loading, isAuthenticated } = useAuth0();
  if (loading || isAuthenticated) {
    return null;
  }
  navigate("/about/");
  return <About />;
};