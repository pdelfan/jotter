import React from "react";
import styled from "styled-components";
import Description from "./BookDescription";
import Meta from "./BookMeta";
import BookInfo from "./BookInfo";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-bottom: 5rem;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`;

const Primary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  background-color: #fdfdfd;
  padding: 1.8rem;
  border: var(--general-border);
  border-radius: var(--round);
  
`;

const Secondary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  flex-grow: 0.7;
  row-gap: 2rem;

  @media only screen and (max-width: 1200px) {
    flex: 1;
    flex-basis: 100%;
  }
`;

export const BookContainer = ({
  cover,
  title,
  author,
  date,
  desc,
  category,
  length,
  avgRating,
  ratings,
  language,
  isbn,
  username,
  children,
  addButtons,
  moveButton,
  deleteButton,
  redirectAfterDelete,
}) => {
  return (
    <Container>
      <Primary>
        <BookInfo
          cover={cover}
          title={title}
          author={author}
          date={date}
          username={username}
          addButtons={addButtons}
          moveButton={moveButton}
          deleteButton={deleteButton}
          redirectAfterDelete={redirectAfterDelete}
          isbn={isbn}
        />
        <Description description={desc} />
      </Primary>
      <Secondary>
        <Meta
          category={category}
          length={length}
          language={language}
          ratings={ratings}
          avgRating={avgRating}
          isbn={isbn}
        />
        {children}
      </Secondary>
    </Container>
  );
};
