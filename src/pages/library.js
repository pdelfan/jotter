import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import LoadingIcon from "../assets/loading.svg";
import { useAuth0 } from "../services/auth";
import { Heading, SubHeading } from "../components/Headings";
import BookItem, { BookList } from "../components/BookItem";
import { getLibrary } from "../services/realm/API";
import { Router } from "@reach/router";
import PrivateRoute from "../components/Routing";
import Index from "../pages/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Loading = styled.img`
  width: 8rem;
  margin: 1rem auto 1rem auto;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
  min-height: 60vh;
`;

const Library = () => {
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
                key={book.bookTitle + book.cover}
                isLink={true}
                shouldHover={true}
                cover={book.cover}
                title={book.bookTitle}
                author={book.author.join(", ")}
                date={book.year}
              />
            );
          })}
        </BookList>
      </Layout>
    );
  } else if (isLoading) {
    return (
      <Wrapper>
        <Loading src={LoadingIcon} alt="Loading icon" className="rotating" />
      </Wrapper>
    );
  } else {
    return (
      <Router>
        <PrivateRoute path="/library" component={Index} />
      </Router>
    );
  }
};

export default Library;
