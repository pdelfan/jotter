import React from "react";
import styled from "styled-components";
import Menu from "./NavBar/Menu";
import { Heading, SubHeading, TopHeader } from "../components/Headings";

const Main = styled.main`
  margin: 0 auto;
  max-width: 90rem;
  padding: 0 1rem;
`;

const Layout = ({ children, heading, subheading }) => {
  if (heading && subheading) {
    return (
      <>
        <Menu />
        <Main>
          <TopHeader>
            <div>
              <Heading>{heading}</Heading>
              <SubHeading>{subheading}</SubHeading>
            </div>
          </TopHeader>
          {children}
        </Main>
      </>
    );
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
