import React from "react";
import styled from "styled-components";
import Styles from "./Styles";
import { converter } from "./Converter";

const Wrapper = styled.div`
  margin: 2rem auto 0 auto;
  width: 100%;
  position: fixed;
  right: 0;
  left: 0;
  top: 0.5rem;
  padding-top: 1rem;
  background-color: white;
  border-bottom: 2px solid #ccc;
  z-index: 100;
`;

const Items = styled.div`
  background-color: white;
  margin: 0 auto 0 auto;
  max-width: inherit;
  max-width: 50rem;
`;

const Toolbar = ({ editorState, toggleInlineStyle, toggleBlockType }) => {
  const activeStyle = editorState.getCurrentInlineStyle();
  const activeBlock = converter.toActiveBlockType(editorState);

  return (
    <Wrapper>
      <Items>
        <Styles
          activeStyle={activeStyle}
          toggleInlineStyle={toggleInlineStyle}
          activeBlock={activeBlock}
          toggleBlockType={toggleBlockType}
          editorState={editorState}
        />
      </Items>
    </Wrapper>
  );
};

export default Toolbar;
