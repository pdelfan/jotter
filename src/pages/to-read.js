import React, { useState } from "react";
import Layout from "../components/Page/Layout";
import LoadingIcon from "../assets/loading.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { getToRead } from "../services/realm/API";
import { Wrapper, Loading } from "../components/Notification & Error/Loading";
import useFetchMongoBooks from "../hooks/useFetchMongoBooks";
import ErrorMessage from "../components/Notification & Error/ErrorMessage";
import BookItem, { BookList } from "../components/Book/Book";
import Header from "../components/Page/Headings";
import SearchBar from "../components/Page/SearchBar";
import { NoContentMessage } from "../components/Notification & Error/NoContentMessage";

export default function ToRead() {
  const { isAuthenticated } = useAuth0();
  const {
    data: toReadBooks,
    hasFetched,
    error,
    loading
  } = useFetchMongoBooks({ isAuthenticated:isAuthenticated, from: getToRead });

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchBook = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Header header="To-read" subheader="The books you want to read later">
        <SearchBar
          searchBook={searchBook}
          handleSearch={handleSearch}
          placeholder="Search a book"
        />
      </Header>
      {error && (
        <ErrorMessage message="Sorry, we ran into a problem while loading your to-read books. Try again by refreshing this page." />
      )}
      {hasFetched && (
        <BookList>
          {toReadBooks
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
                  to={`/to-read-book?id=${book.isbn}`}
                  isbn={book.isbn}
                  cover={book.cover}
                  title={book.bookTitle}
                  author={book.author.join(", ")}
                  date={book.year}
                />
              );
            })}          
        </BookList>
      )}
      {loading && (
        <Wrapper minHeight="40vh">
          <Loading
            minHeight="50vh"
            src={LoadingIcon}
            alt="Loading icon"
            className="rotating"
          />
        </Wrapper>
      )}
      {hasFetched && toReadBooks.length === 0 && (
        <NoContentMessage>
          You don't have any books in your to-read yet.
        </NoContentMessage>
      )}
    </Layout>
  );
}
