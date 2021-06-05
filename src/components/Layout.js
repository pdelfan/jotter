import React from "react";
import styled from "styled-components";
import Menu from "./NavBar/Menu";

const Main = styled.div`
  margin: 0 auto;
  max-width: 90rem;
  padding: 0 1rem;
`;

const Layout = ({ children }) => { 
  return (
    <>
      <Menu />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
