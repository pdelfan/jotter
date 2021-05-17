import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Book = styled(Link)`
  transition: 0.2s;
  flex: 0 0 17rem;
  margin-bottom: 5rem;
  img {
    box-shadow: var(--book-shadow);
    border: var(--book-border);
    height: 200px;
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

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }

`;

const Info = styled.div`
  max-width: 14rem;
`;

export default function BookItem({ cover, title, author, date, url }) {
  return (
    <Book to={url}>
      <img src={cover} alt='Book cover' />
      <Info>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <h5>{date}</h5>        
      </Info>
    </Book>
  );
}
