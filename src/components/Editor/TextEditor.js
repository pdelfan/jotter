import React, { useState } from "react";
import { Editor, RichUtils } from "draft-js";
import styled from "styled-components";
import Toolbar from "./Toolbar";
import { useEditor } from "../../hooks/useEditor";
import "draft-js/dist/Draft.css";
import { styleMap } from "./Styles";
import AddNoteButton from "../Buttons/AddNoteButton";
import UpdateNoteButton from "../Buttons/UpdateNoteButton";
import { converter } from "./Converter";
import { BSON } from "realm-web";
import { myBlockStyleFn } from "./Styles";

const EditorWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 5rem;
  .DraftEditor-root {
    font-family: Arial;
    font-size: 1.05rem;
    color: #585858;
    line-height: 24px;
    -webkit-font-smoothing: antialiased;
  }

  .blockquote {
    border-left: var(--general-border);
    padding-left: 1rem;
  }

  max-width: 50rem;
  margin: 0.7rem auto 0 auto;
  min-height: 50vh;
`;

const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
  max-width: 50rem;
  width: 100%;
  margin-bottom: 3rem;
  border: none;
  color: #555;
  font-size: 2rem;
  font-weight: 600;
  background: white;

  ::placeholder {
    padding: 1rem 0 0 0;
    color: #bebebe;
    font-size: 2rem;
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  margin: 2rem auto 0 auto;
  width: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem 0;
  border-top: 2px solid #ccc;
  background-color: white;
  z-index: 10000;
  position: fixed;
`;

const Wrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const TextEditor = ({
  username,
  bookID,
  noteID,
  editMode,
  initialContent,
  location,
}) => {
  const editor = useEditor(initialContent);
  const title = location ? location.state.title : "";

  function handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(editor.editorState, command);

    if (newState) {
      editor.setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  }

  const [input, setInput] = useState(title);

  const handleType = (e) => {
    setInput(e.target.value);
  };

  if (editMode) {
    return (
      <section>
        <Toolbar
          editorState={editor.editorState}
          setEditorState={editor.setEditorState}
          RichUtils={RichUtils}
          toggleInlineStyle={editor.toggleInlineStyle}
          toggleBlockType={editor.toggleBlockType}
        />

        <EditorWrapper>
          <Input
            type="text"
            name=""
            id=""
            onChange={handleType}
            placeholder="Title..."
            value={input}
          />

          <Editor
            editorState={editor.editorState}
            onChange={editor.setEditorState}
            handleKeyCommand={(cmd) => handleKeyCommand(cmd)}
            placeholder="Start typing..."
            customStyleMap={styleMap}
            spellCheck={true}
            blockStyleFn={myBlockStyleFn}
          />
          <ButtonContainer>
            <Wrapper>
              <UpdateNoteButton
                username={username}
                title={input !== "" ? input : "Untitled"}
                content={JSON.stringify(
                  converter.toContent(editor.editorState)
                )}
                bookID={bookID}
                noteID={noteID}
                redirectAfterAdd={"/library"}
              />
            </Wrapper>
          </ButtonContainer>
        </EditorWrapper>
      </section>
    );
  } else {
    return (
      <section>
        <Toolbar
          editorState={editor.editorState}
          setEditorState={editor.setEditorState}
          RichUtils={RichUtils}
          toggleInlineStyle={editor.toggleInlineStyle}
          toggleBlockType={editor.toggleBlockType}
        />

        <EditorWrapper>
          <Input
            type="text"
            name=""
            id=""
            onChange={handleType}
            placeholder="Title..."
          />
          <AddNoteButton
            username={username}
            title={input !== "" ? input : "Untitled"}
            content={JSON.stringify(converter.toContent(editor.editorState))}
            date={new Date().toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            bookID={bookID}
            noteID={BSON.ObjectId()}
            redirectAfterAdd={"/library"}
          />

          <Editor
            editorState={editor.editorState}
            onChange={editor.setEditorState}
            handleKeyCommand={(cmd) => handleKeyCommand(cmd)}
            placeholder="Start typing..."
            customStyleMap={styleMap}
            spellCheck={true}
          />
        </EditorWrapper>
      </section>
    );
  }
};

export default TextEditor;
