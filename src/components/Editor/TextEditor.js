import React from "react";
import { Editor, RichUtils } from "draft-js";
import styled from "styled-components";
import Toolbar from "./Toolbar";
import { useEditor } from "../../hooks/useEditor";
import "draft-js/dist/Draft.css";
import { styleMap } from "./InlineStyles";

const Wrapper = styled.div`
  max-width: 50rem;
  margin: 5rem auto 0 auto;
  min-height: 50vh;
`;

const EditorWrapper = styled.div`
  margin-top: 2rem;
  .DraftEditor-root {
    font-family: Arial;
    font-size: 1.05rem;
    color: #585858;
    line-height: 24px;
    -webkit-font-smoothing: antialiased;
  }
`;

const TextEditor = () => {
  const editor = useEditor();

  function handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(editor.editorState, command);

    if (newState) {
      editor.setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  }

  return (
    <Wrapper>
      <Toolbar
        editorState={editor.editorState}
        setEditorState={editor.setEditorState}
        RichUtils={RichUtils}
        toggleInlineStyle={editor.toggleInlineStyle}
      />
      <EditorWrapper>
        <Editor
          editorState={editor.editorState}
          onChange={editor.setEditorState}
          handleKeyCommand={(cmd) => handleKeyCommand(cmd)}
          placeholder="Start typing..."
          customStyleMap={styleMap}
        />
      </EditorWrapper>
    </Wrapper>
  );
};

export default TextEditor;
