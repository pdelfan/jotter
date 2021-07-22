import React from "react";
import StyleButton from "./StyleButton";
import styled from "styled-components";

const blockTypes = [
  { label: "faListOl", style: "ordered-list-item" },
  { label: "faListUl", style: "unordered-list-item" },
  { label: "faQuoteRight", style: "blockquote" },
  { label: "faFileCode", style: "code-block" },
];

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.5rem 0;
`;

const BlockStyles = ({ activeBlock, toggleBlockType }) => {
  return (
    <Wrapper>
      {blockTypes.map((blockType) => {
        return (
          <StyleButton
            active={blockType.style === activeBlock}
            style={blockType.style}
            label={blockType.label}
            toggleStyle={toggleBlockType}
            key={blockType.label}
          />
        );
      })}
    </Wrapper>
  );
};

export default BlockStyles;
