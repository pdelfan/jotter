import React, { useState } from "react";
import Layout from "../components/Layout";
import { Heading, SubHeading, TopHeader } from "../components/Headings";
import SearchBar from "../components/SearchBar";
import BookItem, { BookList } from "../components/Book";
import { AddToLibraryButton, AddToReadButton } from "../components/Buttons";
import NoCover from "../assets/noCover.png";
import LoadingIcon from "../assets/loading.svg";
import styled from "styled-components";
import { addBookToLibrary, addBookToToRead } from "../services/realm/API";
import { useAuth0 } from "../services/auth";
import { Router } from "@reach/router";
import PrivateRoute from "../components/Routing";
import Index from "../pages/index";
import { Loading } from "../components/Loading";
import { searchGoogleBooks } from "../services/googleBooks";

const BookButtons = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const AddBook = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const searchBook = (e) => {
    e.preventDefault();
    setLoading(true);
    searchGoogleBooks(search)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLoading(false);
        setBooks([...res.items]);
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };
  if (isAuthenticated && !isLoading) {
    return (
      <Layout>
        <TopHeader>
          <div>
            <Heading>Add Book</Heading>
            <SubHeading>Find a book and add it to your collection</SubHeading>
          </div>
          <SearchBar
            searchBook={searchBook}
            handleSearch={handleSearch}
            placeholder="Search for books"
          />
        </TopHeader>
        <BookList>
          {loading ? (
            <Loading
              minHeight="60vh"
              src={LoadingIcon}
              alt="Loading icon"
              className="rotating"
            />
          ) : (
            books.map((book, i) => {
              let title =
                book.volumeInfo.title === undefined
                  ? "Unknown Title"
                  : book.volumeInfo.title;
              let author =
                book.volumeInfo.authors !== undefined
                  ? book.volumeInfo.authors.join(", ")
                  : "Unknown Author";

              let image =
                book.volumeInfo.imageLinks === undefined
                  ? `${NoCover}`
                  : book.volumeInfo.imageLinks.thumbnail;
              let published =
                book.volumeInfo.publishedDate === undefined
                  ? "Unknown Date"
                  : book.volumeInfo.publishedDate.split("-")[0];
              let bookID = book.id;
              return (
                <BookItem
                  key={i}
                  cover={image}
                  title={title}
                  author={author}
                  date={published}
                >
                  <BookButtons>
                    <AddToLibraryButton
                      handleAddToLibrary={() =>
                        addBookToLibrary(
                          user.nickname,
                          title,
                          author,
                          published,
                          image,
                          new Date(),
                          bookID
                        )
                      }
                    />
                    <AddToReadButton
                      handleAddToToRead={() =>
                        addBookToToRead(
                          user.nickname,
                          title,
                          author,
                          published,
                          image,
                          new Date(),
                          bookID
                        )
                      }
                    />
                  </BookButtons>
                </BookItem>
              );
            })
          )}
        </BookList>
      </Layout>
    );
  } else {
    return (
      <Router>
        <PrivateRoute path="/add-book" component={Index} />
      </Router>
    );
  }
};

export default AddBook;
