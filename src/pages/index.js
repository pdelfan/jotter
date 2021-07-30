import React, { useState } from "react";
import Layout from "../components/Page/Layout";
import LoadingIcon from "../assets/loading.svg";
import { useAuth0 } from "@auth0/auth0-react";
import BookItem, { BookList } from "../components/Book/Book";
import { getLibrary } from "../services/realm/API";
import { Wrapper, Loading } from "../components/Notification & Error/Loading";
import useFetchMongoBooks from "../hooks/useFetchMongoBooks";
import ErrorMessage from "../components/Notification & Error/ErrorMessage";
import Header from "../components/Page/Headings";
import SearchBar from "../components/Page/SearchBar";

const Library = () => {
  const { user } = useAuth0();
  const {
    data: libraryBooks,
    hasFetched,
    error,
  } = useFetchMongoBooks({ user: user, from: getLibrary });

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchBook = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Header header="Library" subheader="All your books in one place">
        <SearchBar
          searchBook={searchBook}
          handleSearch={handleSearch}
          placeholder="Search a book"
        />
      </Header>

      {error && (
        <ErrorMessage message="Sorry, we ran into a problem while loading your library. Try again by refreshing this page." />
      )}

      {libraryBooks && (
        <BookList>
          {libraryBooks
            .filter((book) => {
              if (search === "") {
                return book;
              } else if (
                book.bookTitle.toUpperCase().includes(search.toUpperCase())
              ) {
                return book;
              } else {
                return null;
              }
            })
            .map((book) => {
              return (
                <BookItem
                  key={book.bookTitle + book.cover}
                  to={`/book?id=${book.isbn}`}
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
};

export default Library;
