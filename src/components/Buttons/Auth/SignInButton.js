import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../../../services/realm/userAuth";
import {AuthButton} from "./AuthButton";

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignIn = () => {
    loginWithRedirect({});
    Login();
  };

  return <AuthButton onClick={() => handleSignIn()}>Sign in</AuthButton>;
};

export default SignInButton;
