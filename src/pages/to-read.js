import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LoadingIcon from "../assets/loading.svg";
import { useAuth0 } from "../services/auth";
import BookItem, { BookList } from "../components/Books/LibraryBook";
import { getToRead } from "../services/realm/API";
import { Router } from "@reach/router";
import Index from "../pages/index";
import PrivateRoute from "../components/Routing";
import { Wrapper, Loading } from "../components/Loading";

export default function ToRead() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [libraryBooks, setLibraryBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (user) {
      setIsFetching(true);
      getToRead(user.nickname)
        .then((response) => {
          setLibraryBooks(response);
          setIsFetching(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [user]);

  if (isAuthenticated && !isLoading) {
    return (
      <Layout heading="To-read" subheading="The books you want to read later">
        {libraryBooks && (
          <BookList>
            {libraryBooks.map((book) => {
              return (
                <BookItem
                  key={book.bookTitle + book.cover}
                  isbn={book.isbn}
                  shouldHover={true}
                  cover={book.cover}
                  title={book.bookTitle}
                  author={book.author.join(", ")}
                  date={book.year}
                />
              );
            })}
          </BookList>
        )}
        {isFetching && (
          <Wrapper minHeight="50vh">
            <Loading
              minHeight="60vh"
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
        <PrivateRoute path="/book" component={Index} />
      </Router>
    );
  }
}
