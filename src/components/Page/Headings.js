import React from "react";
import styled from "styled-components";

const MainHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const SubHeader = styled.h2`
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;

  @media only screen and (max-width: 1200px) {
    font-size: 1.3rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  row-gap: 2rem;
`;

const Header = ({ header, subheader, children }) => {
  return (
    <Container>
      <div>
        <MainHeader>{header}</MainHeader>
        <SubHeader>{subheader}</SubHeader>
      </div>
      {children}
    </Container>
  );
};

export default Header;
