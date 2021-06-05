import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Book = styled.div`
  transition: 0.2s;
  flex: 0 0 17rem;
  margin-bottom: 5rem;

  .cover {
    box-shadow: var(--book-shadow);
    border: var(--general-border);
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

  ${(props) =>
    props.hover
      ? `&:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }`
      : ""}
`;

const Info = styled.div`
  max-width: 14rem;
  word-wrap: break-word;
`;

const ConditionalLink = ({ children, to, isLink }) =>
  isLink ? <Link to={to}>{children}</Link> : <>{children}</>;

export default function BookItem({
  cover,
  title,
  author,
  date,
  isLink,
  shouldHover,
  children,
}) {
  return (
    <Book hover={shouldHover}>
      <ConditionalLink isLink={isLink} to="/library-book">
        <img src={cover} alt="Book cover" className="cover" />
        <Info>
          <h3>{title}</h3>
          <h4>{author}</h4>
          <h5>{date}</h5>
        </Info>
        {children}
      </ConditionalLink>
    </Book>
  );
}

export const BookList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;
`;
