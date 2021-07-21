import React from "react";
import styled from "styled-components";
// import StyleButton from "./StyleButton";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBold } from "@fortawesome/free-solid-svg-icons";
import InlineStyles from "./InlineStyles";

const Wrapper = styled.div`
  margin-bottom: 1rem;
  background-color: white;
  border: 2px solid #ccc;
  padding: 0.2rem;
`;

const Toolbar = ({
  editorState,
  //   setEditorState,
  //   RichUtils,
  toggleInlineStyle,
}) => {
  //   const newState = RichUtils.toggleInlineStyle(editorState, "BOLD");
  const activeStyle = editorState.getCurrentInlineStyle();

  //   const boldClick = () => {
  //     setEditorState(newState);
  //   };

  return (
    <Wrapper>
      {/* <button onClick={() => boldClick()}>Bold</button> */}
      <InlineStyles
        activeStyle={activeStyle}
        toggleInlineStyle={toggleInlineStyle}
        editorState={editorState}
      />
    </Wrapper>
  );
};

export default Toolbar;
