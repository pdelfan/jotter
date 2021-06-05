import React from "react";
import styled from "styled-components";
import JotterLogo from "../assets/jotter-logo.svg";
import LoadingIcon from "../assets/loading.svg";
import { LoginButton } from "../components/Buttons";
import { useAuth0 } from "../services/auth";
import { Router } from "@reach/router";
import { RedirectToLibrary } from "../components/Routing";
import Library from "../pages/library";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Logo = styled.img`
  width: 12rem;
`;

const Loading = styled.img`
  width: 8rem;
  margin: 1rem auto 1rem auto;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
  min-height: 60vh;
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

const Index = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isAuthenticated && !isLoading) {
    return (
      <Wrapper>
        <Logo src={JotterLogo} alt="Jotter logo" />
        <Greeting>Write and keep notes on your favourite books. </Greeting>
        <LoginButton />
      </Wrapper>
    );
  } else if (isLoading) {
    return (
      <Wrapper>
        <Loading src={LoadingIcon} alt="Loading icon" className="rotating" />
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
