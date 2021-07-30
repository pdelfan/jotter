import React from "react";
import styled from "styled-components";
import Menu from "../Navbar/Menu";
import { RedirectToLogin } from "../Routing";
import { useAuth0 } from "@auth0/auth0-react";
import { Wrapper } from "../Notification & Error/Loading";
import JotterLogo from "../../assets/jotter-logo.svg";

const Main = styled.main`
  margin: 0 auto 1rem auto;
  max-width: 90rem;
  padding: 3rem 1rem 0 1rem;
`;

const Logo = styled.img`
  width: 12rem;
`;

const VerifyMessage = styled.h1`
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 25rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--gray);
  text-align: center;
`;

const LogoutBtn = styled.button`
  border-radius: var(--round);
  padding: 0.8rem 2rem;
  background: #888;
  color: #fff;
  font-size: 1rem;

  &:hover {
    background: #555;
  }
`;

const Layout = ({ children }) => {
  const { isAuthenticated, isLoading, user, logout } = useAuth0();

  if (user && user.email_verified === false) {
    return (
      <Wrapper minHeight="100vh">
        <Logo src={JotterLogo} alt="Jotter logo" />
        <VerifyMessage>
          Please check your email inbox and verfiy your account to continue
          using Jotter. Then, log out and sign in again to start using Jotter.
        </VerifyMessage>
        <LogoutBtn onClick={() => logout()}>Log out</LogoutBtn>
      </Wrapper>
    );
  } else if (!isLoading && !isAuthenticated) {
    return <RedirectToLogin />;
  } else {
    return (
      <>
        <Menu />
        <Main>{children}</Main>
      </>
    );
  }
};

export default Layout;
