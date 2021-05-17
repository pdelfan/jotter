import React from "react";
import { useAuth0 } from "../services/auth";
import styled from "styled-components";
import Login from "../services/realm/userAuth";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  background-color: ${(props) => (props.logOut ? "#DE4535" : "#1BD692")};
  color: white;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => (props.logOut ? "#d44333" : "#1acf8d")};
  }
`;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleSignIn = () => {
    loginWithRedirect({});
    Login();
  };

  return <Button onClick={() => handleSignIn()}>Sign in</Button>;
};

export default LoginButton;
