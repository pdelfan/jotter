import React from "react";
import styled from "styled-components";


const Main = styled.main`
  margin: 0 auto 1rem auto;
  max-width: 90rem;
  padding: 3rem 1rem 0 1rem;
`;

const Logo = styled.img`
  width: 12rem;
`;

const Title = styled.h1`
  color: #585858;
  font-size: 2.2rem;
  font-weight: normal;
`;

const Subtitle = styled.h2`
  font-weight: normal;
  color: #585858;
  font-size: 1.2rem;
`;

const About = () => {
  return (
    <Main>
      <Title>Build ideas mindfully.</Title>
      <Subtitle>
        Save content, create collections, and connect ideas with other people.
        Sign up for Are.na
      </Subtitle>
    </Main>
  );
};
export default About;
