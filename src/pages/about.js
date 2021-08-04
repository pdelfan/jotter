import React from "react";
import styled from "styled-components";
import libraryShot from "../assets/library-screenshot.png";
import addShot from "../assets/add-book-screenshot.png";
import addNoteShot from "../assets/add-note-screenshot.png";
import bookShot from "../assets/book-screenshot.png";
import SignUpButton from "../components/Buttons/Auth/SignUpButton";
import SignInButton from "../components/Buttons/Auth/SignInButton";
import JotterLogo from "../assets/jotter-logo.svg";

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

  h1 {
    color: #585858;
    font-size: 2.5rem;
    font-weight: normal;
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: normal;
    color: #585858;
    font-size: 1.3rem;
    max-width: 30rem;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1234px) {
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.1rem;
    }
  }
`;

const Logo = styled.img`
  width: 10rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (max-width: 1234px) {
    justify-content: space-around;
    max-width: 17rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const LibraryImage = styled.img`
  max-width: 100%;
  width: 900px;
  flex: 0.5;
  flex-grow: 0;

  @media screen and (max-width: 1234px) {
    margin: 0 auto;
  }
`;

const IntroText = styled.div`
  flex: 0.6;
  flex-grow: 1;

  @media screen and (max-width: 1234px) {
    h1,
    h2 {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const Features = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 7rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Feature = styled.div`
  margin-top: 3rem;
  text-align: center;

  h3 {
    font-size: 1.7rem;
    font-weight: normal;
    color: #585858;
    max-width: 30rem;
    margin: 0 auto 1rem auto;
  }

  p {
    font-size: 1.1rem;
    color: #585858;
    max-width: 30rem;
    margin: 1rem auto 1rem auto;
  }
`;

const FeatureImage = styled.img`
  max-width: 100%;
  width: 700px;
  margin-bottom: 3rem;
`;

const Info = styled.section`
  text-align: center;

  a {
    text-decoration: underline;
  }

  h4 {
    font-weight: normal;
  }
`;

const About = () => {
  return (
    <Main>
      <Hero>
        <IntroText>
          <Logo src={JotterLogo} alt="Jotter logo" />

          <h1>Your reading notebook</h1>
          <h2>
            Add your books, track your reading progress, and write down your
            ideas—all in one place.
          </h2>
          <ButtonContainer>
            <SignUpButton />
            <SignInButton />
          </ButtonContainer>
        </IntroText>
        <LibraryImage src={libraryShot} />
      </Hero>
      <Features>
        <Feature>
          <h3>Build your library</h3>
          <p>
            Easily search a book and add it to your library or to-read for later
            reading.
          </p>
          <FeatureImage src={addShot} />
        </Feature>
        <Feature>
          <h3>Track your reading progress</h3>
          <p>Keep yourself up-to-date on the books you're currently reading.</p>
          <FeatureImage src={bookShot} />
        </Feature>
        <Feature>
          <h3>Jot down your notes</h3>
          <p>Add notes on your books and revisit them later.</p>
          <FeatureImage src={addNoteShot} />
        </Feature>
      </Features>
      <Info>
        <h4>
          Jotter is continuously being improved by{" "}
          <a href="https://github.com/pdelfan">Pouria</a>
        </h4>
      </Info>
    </Main>
  );
};
export default About;
