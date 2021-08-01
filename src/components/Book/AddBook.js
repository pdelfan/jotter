import React from "react";
import styled from "styled-components";
import NoCover from "../../assets/noCover.png";

const Book = styled.div`
  display: flex;
  flex: 0 1 25rem;
  flex-wrap: wrap;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  margin-bottom: 10rem;

  .cover {
    box-shadow: var(--book-shadow);
    border: var(--book-border);
    border-radius: var(--book-round);
    max-height: 200px;
  }

  h3 {
    font-weight: 600;
    color: var(--book-title);
    line-height: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.3rem;
  }

  h4 {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--book-author);
    margin-top: 0;
    margin-bottom: 0.5rem;
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

const Divider = styled.div``;

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
  date,
  shouldHover,
  children,
}) {
  return (
    <Book hover={shouldHover}>
      <img src={cover} alt="Book cover" className="cover" />
      <Divider>
        <Info>
          <h3>{title}</h3>
          <h4>{author}</h4>
          <h5>{date}</h5>
        </Info>
        {children}
      </Divider>
    </Book>
  );
}

export const BookList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;
`;
