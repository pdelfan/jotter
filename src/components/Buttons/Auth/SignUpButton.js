import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../../../services/realm/userAuth";
import {AuthButton} from "./AuthButton";

const SignUpButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    const handleSignUp = () => {
      loginWithRedirect({ screen_hint: "signup" });
      Login();
    };
  
    return (
      <AuthButton onClick={() => handleSignUp()}>Sign up</AuthButton>
    );
  };

export default SignUpButton;
