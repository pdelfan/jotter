import React, { useState } from "react";
import styled from "styled-components";
import { SectionTitle, Text } from "./Section";

const ShowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.3rem;
  padding: 0.4rem 0.7rem;  
  background-color: #888;  
  color: #fff;    
  font-size: 0.9rem;

  &:hover {
    background-color: #555;    
  }
`;

export default function Description({ description }) {
  const [showMore, setShowMore] = useState(false);
  const getText = (text, wordLimit) => {
    if (text.length <= wordLimit)
      return (
        <p
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      );
    if (text.length > wordLimit && showMore) {
      return (
        <>
          <p
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />

          <ShowButton onClick={() => setShowMore(false)}>Show Less</ShowButton>
        </>
      );
    }
    if (text.length > wordLimit) {
      return (
        <>
          <p
            dangerouslySetInnerHTML={{
              __html: text.slice(0, wordLimit) + "...",
            }}
          />

          <ShowButton onClick={() => setShowMore(true)}>Show more</ShowButton>
        </>
      );
    }
  };

  return (
    <>
      <SectionTitle>Description</SectionTitle>
      <Text>{getText(description, 450)}</Text>
    </>
  );
}
