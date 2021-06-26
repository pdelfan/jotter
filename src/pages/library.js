import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LoadingIcon from "../assets/loading.svg";
import { useAuth0 } from "../services/auth";
import BookItem, { BookList } from "../components/Books/LibraryBook";
import { getLibrary } from "../services/realm/API";
import { Router } from "@reach/router";
import { RedirectToLibrary } from "../components/Routing";
import { Wrapper, Loading } from "../components/Loading";

const Library = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [libraryBooks, setLibraryBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (user) {
      setIsFetching(true);
      getLibrary(user.nickname)
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
      <Layout heading="Library" subheading="All your books in one place">
        {isFetching ? (
          <Wrapper minHeight="60vh">
            <Loading
              minHeight="50vh"
              src={LoadingIcon}
              alt="Loading icon"
              className="rotating"
            />
          </Wrapper>
        ) : (
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
