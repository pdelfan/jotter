import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Book = styled.div`
  transition: 0.2s;
  flex: 0 0 17rem;

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
    margin-top: 0.5rem;
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

const BookLink = styled(Link)`
  transition: 0.2s;
  flex: 0 1 17rem;
  margin-bottom: 10rem;

  &:hover {
    transform: translateY(-0.5rem);
    transition: 0.2s;
  }
`;

export default function BookItem({
  isbn,
  cover,
  title,
  author,
  date,
  isLink,
  percentageRead,
  children,
  to,
}) {
  const ConditionalLink = ({ children, to, isLink }) =>
    isLink ? (
      <BookLink to={to} state={{ isbn: isbn, percentageRead: percentageRead }}>
        {children}
      </BookLink>
    ) : (
      <>{children}</>
    );

  return (
    <ConditionalLink isLink={isLink} to={to}>
      <Book>
        <img src={cover} alt="Book cover" className="cover" />
        <Info>
          <h3>{title}</h3>
          <h4>{author}</h4>
          <h5>{date}</h5>
        </Info>
        {children}
      </Book>
    </ConditionalLink>
  );
}

export const BookList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;
`;
