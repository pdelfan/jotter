import React from "react";
import styled from "styled-components";
// import { useAuth0 } from "../services/auth"
import Menu from "./NavBar/Menu";

const Main = styled.div`
  margin: 0 auto;
  max-width: 90rem;
  padding: 0 1rem;
`;

const Layout = ({ children }) => {
  // const { isLoading } = useAuth0()

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  return (
    <>
      <Menu />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
