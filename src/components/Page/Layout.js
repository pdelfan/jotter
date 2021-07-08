import React from "react";
import styled from "styled-components";
import Menu from "../Navbar/Menu";
import { Heading, SubHeading, TopHeader } from "./Headings";
import { RedirectToLogin } from "../Routing";
import { useAuth0 } from "@auth0/auth0-react";

const Main = styled.main`
  margin: 0 auto;
  max-width: 90rem;
  padding: 0 1rem;
`;

const Layout = ({ children, heading, subheading }) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <RedirectToLogin />;
  }

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
