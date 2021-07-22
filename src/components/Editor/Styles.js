import React from "react";
import StyleButton from "./StyleButton";
import styled from "styled-components";

const blockTypes = [
  { label: "faListOl", style: "ordered-list-item" },
  { label: "faListUl", style: "unordered-list-item" },
  { label: "faQuoteRight", style: "blockquote" },
  { label: "faFileCode", style: "code-block" },
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
    padding: "3px 5px",
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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.5rem;
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

// import React from "react";
// import StyleButton from "./StyleButton";
// import styled from "styled-components";

// const inlineTypes = [
//   { label: "faBold", style: "BOLD" },
//   { label: "faItalic", style: "ITALIC" },
//   { label: "faUnderline", style: "UNDERLINE" },
//   { label: "faStrikethrough", style: "STRIKETHROUGH" },
//   { label: "faHighlighter", style: "HIGHLIGHT" },
//   { label: "faCode", style: "CODE" },
// ];

// export const styleMap = {
//   CODE: {
//     fontFamily: "monospace",
//     borderRadius: "2px",
//     padding: "3px 5px",
//   },
//   HIGHLIGHT: {
//     // background: "#FFFF00",
//     // color: "#574101",
//     background: "#FFA184",
//     color: "#5F362C",
//     padding: "1px 2px",
//   },
//   STRIKETHROUGH: {
//     opacity: "0.4",
//     textDecoration: "line-through",
//   },
// };

// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   padding: 0.5rem 0;
// `;

// const InlineStyles = (props) => {
//   return (
//     <Wrapper>
//       {inlineTypes.map((inlineType) => {
//         return (
//           <StyleButton
//             key={inlineType.label}
//             label={inlineType.label}
//             style={inlineType.style}
//             toggleStyle={props.toggleInlineStyle}
//             active={props.activeStyle.has(inlineType.style)}
//           />
//         );
//       })}
//     </Wrapper>
//   );
// };

// export default InlineStyles;
