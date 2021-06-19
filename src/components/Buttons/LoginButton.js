import React from "react";
import { useAuth0 } from "../../services/auth";
import styled from "styled-components";
import Login from "../../services/realm/userAuth";

const LoginBtn = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  background-color: #1bd692;
  color: white;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: #1acf8d;
  }
`;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleSignIn = () => {
    loginWithRedirect({});
    Login();
  };

  return <LoginBtn onClick={() => handleSignIn()}>Sign in</LoginBtn>;
};

export default LoginButton;