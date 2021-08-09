import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import NoCover from "../../assets/noCover.png";

const Book = styled.div`
  .cover {
    box-shadow: var(--book-shadow);
    border: var(--book-border);
    max-height: 160px;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--book-title);
    line-height: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
  }

  h4 {
    font-size: 0.85rem;
    font-weight: bold;
    color: var(--book-author);
    margin-top: 0;
    margin-bottom: 0.5rem;
    max-width: 12rem;
  }

  h5 {
    font-weight: bold;
    color: var(--book-date);
    margin-top: 0;
  }
`;

const Info = styled.div`
  max-width: 14rem;
  word-wrap: break-word;
`;

const BookLink = styled(Link)`
  transition: 0.2s;
  flex: 0 1 16rem;
  margin-bottom: 8rem;

  &:hover {
    transform: translateY(-0.5rem);
    transition: 0.2s;
  }
`;

export const BookList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

export const validate = (res) => {
  let book = {
    cover: null,
    title: null,
    author: null,
    date: null,
    isbn: null,
  };

  book.cover =
    res.volumeInfo.imageLinks === undefined
      ? `${NoCover}`
      : res.volumeInfo.imageLinks.thumbnail;

  book.title = res.volumeInfo.title
    ? res.volumeInfo.title
    : "Title not Avaialble";

  book.author = res.volumeInfo.authors
    ? res.volumeInfo.authors.join(", ")
    : "Author not available";

  book.date = res.volumeInfo.publishedDate
    ? res.volumeInfo.publishedDate.split("-")[0]
    : "Date not available";

  book.isbn = res.id ? res.id : "N/A";

  return book;
};

export default function BookItem({
  cover,
  title,
  author,  
  children,
  to,
}) {
  return (
    <BookLink to={to}>
      <Book>
        <img src={cover} alt="Book cover" className="cover" />
        <Info>
          <h3>{title}</h3>
          <h4>{author}</h4>
        </Info>
        {children}   
      </Book>
    </BookLink>
  );
}
