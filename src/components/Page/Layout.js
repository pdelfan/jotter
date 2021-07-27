import React from "react";
import styled from "styled-components";
import Menu from "../Navbar/Menu";
import { RedirectToLogin } from "../Routing";
import { useAuth0 } from "@auth0/auth0-react";

const Main = styled.main`
  margin: 0 auto 1rem auto;
  max-width: 90rem;
  padding: 3rem 1rem 0 1rem;
`;

const Layout = ({ children }) => {
  const { isAuthenticated, isLoading  } = useAuth0();

  if (!isLoading && !isAuthenticated) {
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
