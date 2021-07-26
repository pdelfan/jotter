import React from "react";
import StyleButton from "./StyleButton";
import styled from "styled-components";

const blockTypes = [
  { label: "faListOl", style: "ordered-list-item" },
  { label: "faListUl", style: "unordered-list-item" },
  { label: "faQuoteRight", style: "blockquote" },
];

const inlineTypes = [
  { label: "faBold", style: "BOLD" },
  { label: "faItalic", style: "ITALIC" },
  { label: "faUnderline", style: "UNDERLINE" },
  { label: "faStrikethrough", style: "STRIKETHROUGH" },
  { label: "faHighlighter", style: "HIGHLIGHT" },
  { label: "faCode", style: "CODE" },
];

export const styleMap = {
  CODE: {
    fontFamily: "monospace",
    borderRadius: "2px",
    padding: "5px",    
  },
  HIGHLIGHT: {
    // background: "#FFFF00",
    // color: "#574101",
    background: "#FFA184",
    color: "#5F362C",
    padding: "1px 2px",
  },
  STRIKETHROUGH: {
    opacity: "0.4",
    textDecoration: "line-through",
  },
};

export function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  if (type === "blockquote") {
    return "blockquote";
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const Styles = ({
  activeBlock,
  toggleBlockType,
  toggleInlineStyle,
  activeStyle,
}) => {
  return (
    <Wrapper>
      {inlineTypes.map((inlineType) => {
        return (
          <StyleButton
            key={inlineType.label}
            label={inlineType.label}
            style={inlineType.style}
            toggleStyle={toggleInlineStyle}
            active={activeStyle.has(inlineType.style)}
          />
        );
      })}
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

export default Styles;
