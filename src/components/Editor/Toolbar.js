import React from "react";
import styled from "styled-components";
import Styles from "./Styles";
import { converter } from "./Converter";

const Wrapper = styled.div`  
  max-width: 50rem;
  margin: 2rem auto 0 auto;  
`;

const Items = styled.div`
  background-color: white;
  border: 2px solid #ccc;
  border-radius: var(--round);
  margin: 1rem auto 0 auto;
  max-width: 50rem;
  position: fixed;
  right: 1rem;
  left: 1rem;
  z-index: 100;
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
