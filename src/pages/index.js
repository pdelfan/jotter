import React from "react";
import styled from "styled-components";
import JotterLogo from "../assets/jotter-logo.svg";
import LoadingIcon from "../assets/loading.svg";
import { useAuth0 } from "../services/auth";
import Login from "../services/realm/userAuth";
import { Router } from "@reach/router";
import { RedirectToLibrary } from "../components/Routing";
import Library from "../pages/library";
import { Wrapper, Loading } from "../components/Loading";

const Logo = styled.img`
  width: 12rem;
`;

const Greeting = styled.h1`
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 25rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--gray);
  text-align: center;
`;

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

const Index = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated && !isLoading) {
    return (
      <Wrapper minHeight="100vh">
        <Logo src={JotterLogo} alt="Jotter logo" />
        <Greeting>Write and keep notes on your favourite books. </Greeting>
        <LoginButton />
      </Wrapper>
    );
  } else if (isLoading) {
    return (
      <Wrapper>
        <Loading
          minHeight="60vh"
          src={LoadingIcon}
          alt="Loading icon"
          className="rotating"
        />
      </Wrapper>
    );
  } else {
    return (
      <Router>
        <RedirectToLibrary path="/" component={Library} />
      </Router>
    );
  }
};

export default Index;
