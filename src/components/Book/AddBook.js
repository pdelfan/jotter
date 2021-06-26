import React from "react";
import styled from "styled-components";

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
    font-weight: 500;
    color: var(--book-date);
    margin-top: 0;
  }
`;

const Info = styled.div`
  max-width: 14rem;
  word-wrap: break-word;
`;

const Divider = styled.div``;

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
