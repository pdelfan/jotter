import React from "react";
import Layout from "../components/Page/Layout";
import LoadingIcon from "../assets/loading.svg";
import { useAuth0 } from "../services/auth";
import BookItem, { BookList } from "../components/Book/LibraryBook";
import { getLibrary } from "../services/realm/API";
import { Router } from "@reach/router";
import { RedirectToLibrary } from "../components/Routing";
import { Wrapper, Loading } from "../components/Loading";
import useFetchMongoBooks from "../hooks/useFetchMongoBooks";

const Library = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const {
    data: libraryBooks,
    hasFetched,
    error,
  } = useFetchMongoBooks({ user: user, from: getLibrary });

  if (isAuthenticated && !isLoading) {
    return (
      <Layout heading="Library" subheading="All your books in one place">
        {libraryBooks && (
          <BookList>
            {libraryBooks.map((book) => {
              return (
                <BookItem
                  key={book.bookTitle + book.cover}
                  isLink={true}
                  to="/book/"
                  isbn={book.isbn}
                  shouldHover={true}
                  cover={book.cover}
                  title={book.bookTitle}
                  author={book.author.join(", ")}
                  date={book.year}
                  percentageRead={book.percentageRead}
                />
              );
            })}
          </BookList>
        )}
        {!hasFetched && (
          <Wrapper minHeight="60vh">
            <Loading
              minHeight="50vh"
              src={LoadingIcon}
              alt="Loading icon"
              className="rotating"
            />
          </Wrapper>
        )}
      </Layout>
    );
  } else {
    return (
      <Router>
        <RedirectToLibrary path="/" component={Library} />
      </Router>
    );
  }
};

export default Library;
