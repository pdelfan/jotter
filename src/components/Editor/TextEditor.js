import React from "react";
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

const EditorWrapper = styled.div`
  padding-top: 8rem;
  padding-bottom: 5rem;
  .DraftEditor-root {
    font-family: Arial;
    font-size: 1.05rem;
    color: #585858;
    line-height: 24px;
    -webkit-font-smoothing: antialiased;
  }
  max-width: 50rem;
  margin: 0.7rem auto 0 auto;
  min-height: 50vh;
`;

const TitleInput = styled.div`
  max-width: 50rem;
  margin: 0.7rem auto 0 auto;
`;

const Input = styled.input`
  position: fixed;
  top: 4rem;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  max-width: 50rem;
  width:100%;
  padding: 1rem 0 0 0;
  border: none;
  color: #888888;
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

const TextEditor = ({
  username,
  bookID,
  noteID,
  noteTitle,
  handleType,
  placeholder,
  editMode,
  input,
  initialContent
}) => {
  const editor = useEditor(initialContent);

  function handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(editor.editorState, command);

    if (newState) {
      editor.setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  }

  if (editMode) {
    return (
      <section>
        <TitleInput>
          <Input
            type="text"
            name=""
            id=""
            onChange={handleType}
            placeholder={placeholder}
            value={input}            
          />
        </TitleInput>
        <Toolbar
          editorState={editor.editorState}
          setEditorState={editor.setEditorState}
          RichUtils={RichUtils}
          toggleInlineStyle={editor.toggleInlineStyle}
          toggleBlockType={editor.toggleBlockType}
        />

        <EditorWrapper>
          <UpdateNoteButton
            username={username}
            title={noteTitle}
            content={JSON.stringify(converter.toContent(editor.editorState))}          
            bookID={bookID}            
            noteID={noteID}
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
  } else {
    return (
      <section>
        <TitleInput>
          <Input
            type="text"
            name=""
            id=""
            onChange={handleType}
            placeholder={placeholder}
          />
        </TitleInput>
        <Toolbar
          editorState={editor.editorState}
          setEditorState={editor.setEditorState}
          RichUtils={RichUtils}
          toggleInlineStyle={editor.toggleInlineStyle}
          toggleBlockType={editor.toggleBlockType}
        />

        <EditorWrapper>
          <AddNoteButton
            username={username}
            title={noteTitle}
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
