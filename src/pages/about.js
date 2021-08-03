import React from "react";
import styled from "styled-components";
import libraryShot from "../assets/library-screenshot.png";
import { AuthButtonContainer } from "../components/Buttons/Auth/AuthButton";
import SignUpButton from "../components/Buttons/Auth/SignUpButton";
import SignInButton from "../components/Buttons/Auth/SignInButton";

const Main = styled.main`
  margin: 0 auto 1rem auto;
  max-width: 90rem;
  padding: 3rem 1rem 0 1rem;
`;

const Hero = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;

// const Logo = styled.img`
//   width: 12rem;
// `;

const Title = styled.h1`
  color: #585858;
  font-size: 2.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-weight: normal;
  color: #585858;
  font-size: 1.3rem;
  max-width: 30rem;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const LibraryImage = styled.img`
  max-width: 100%;
  width: 900px;
  flex: 0.5;
  flex-grow: 0;
`;

const IntroText = styled.div`
  flex: 0.6;
  flex-grow: 1;
`;

const About = () => {
  return (
    <Main>
      <Hero>
        <IntroText>
          <Title>Your reading notebook</Title>
          <Subtitle>
            Add your books, track your reading progress, and write down your
            ideas—all in one place.
          </Subtitle>
          <AuthButtonContainer>
            <SignUpButton />
            <SignInButton />
          </AuthButtonContainer>
        </IntroText>
        <LibraryImage src={libraryShot} />
      </Hero>
    </Main>
  );
};
export default About;
