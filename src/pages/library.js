import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LoadingIcon from "../assets/loading.svg";
import { useAuth0 } from "../services/auth";
import BookItem, { BookList } from "../components/Books/LibraryBook";
import { getLibrary } from "../services/realm/API";
import { Router } from "@reach/router";
import { RedirectToLibrary } from "../components/Routing";
import { Wrapper, Loading } from "../components/Loading";
//import SearchBar from "../components/SearchBar";

const Library = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [libraryBooks, setLibraryBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  // const [search, setSearch] = useState("");
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // const searchBook = (e) => {
  //   e.preventDefault();
  // };

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

  if (isAuthenticated && !isLoading && !isFetching && libraryBooks) {
    return (
      <Layout heading="Library" subheading="All your books in one place">
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
      </Layout>
    );
  } else if (isFetching) {
    return (
      <Wrapper minHeight="100vh">
        <Loading
          minHeight="60vh"
          src={LoadingIcon}
          alt="Loading icon"
          className="rotating"
        />
      </Wrapper>
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
