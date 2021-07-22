import React from "react";
import styled from "styled-components";
import Menu from "../Navbar/Menu";
import { RedirectToLogin } from "../Routing";
import { useAuth0 } from "../../services/auth";

const Main = styled.main`
  margin: 0 auto;
  max-width: 90rem;
  padding: 3rem 1rem 0 1rem;
`;

const Layout = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
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
