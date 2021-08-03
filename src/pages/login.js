import React from "react";
import styled from "styled-components";
import JotterLogo from "../assets/jotter-logo.svg";
import LoadingIcon from "../assets/loading.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { RedirectHome } from "../components/Routing";
import { Wrapper, Loading } from "../components/Notification & Error/Loading";
import SignInButton from "../components/Buttons/Auth/SignInButton";
import SignUpButton from "../components/Buttons/Auth/SignUpButton";
import { AuthButtonContainer } from "../components/Buttons/Auth/AuthButton";

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



const Index = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isLoading && !isAuthenticated) {
    return (
      <Wrapper minHeight="100vh">
        <Logo src={JotterLogo} alt="Jotter logo" />
        <Greeting>Write and keep notes on your favourite books. </Greeting>
        <AuthButtonContainer>
          <SignInButton />
          <SignUpButton />
        </AuthButtonContainer>
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
    return <RedirectHome />;
  }
};

export default Index;
