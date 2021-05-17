import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import JotterLogo from "../assets/jotter-logo.svg";
import LoadingIcon from "../assets/loading.inline.svg";
import LoginButton from "../components/LoginButton";
import { useAuth0 } from "../services/auth";
import { Heading, SubHeading } from "../components/Headings";
import BookItem from "../components/BookItem";
import { getLibrary } from "../services/realm/API";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Logo = styled.img`
  width: 12rem;
`;

const Loading = styled.img`
  width: 8rem;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
`;

const Greeting = styled.h1`
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 25rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--gray);
  text-align: center;
`;

const BookList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

const IndexPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [libraryBooks, setLibraryBooks] = useState([]);

  useEffect(() => {
    if (user) {
      getLibrary(user.nickname)
        .then((response) => {
          setLibraryBooks(response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [user]);

  if (isAuthenticated && !isLoading) {
    return (
      <Layout>
        <div>
          <Heading>Library</Heading>
          <SubHeading>All your books in one place</SubHeading>
        </div>
        <BookList>
          {libraryBooks.map((book) => {
            return (
              <BookItem
                cover={book.cover}
                title={book.bookTitle}
                author={book.author.join(", ")}
                date={book.year}
              ></BookItem>
            );
          })}
        </BookList>
      </Layout>
    );
  } else if (!isAuthenticated && !isLoading) {
    return (
      <Wrapper>
        <Logo src={JotterLogo} alt="Jotter logo" />
        <Greeting>Write and keep notes on your favourite books. </Greeting>
        <LoginButton />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Loading src={LoadingIcon} alt="Loading icon" className="rotating" />
      </Wrapper>
    );
  }
};

export default IndexPage;
