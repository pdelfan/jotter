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
import DeleteNoteButton from "../Buttons/DeleteNoteButton";
import TextareaAutosize from "react-autosize-textarea";

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
    border-left: var(--gray-border);
    padding-left: 1rem;
  }

  max-width: 50rem;
  margin: 0.7rem auto 0 auto;
  min-height: 50vh;
`;

const EditButton = styled.button`
  background-color: transparent;
  color: #555;
  font-weight: bold;
  border: 2px solid #555;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;  

  &:hover {
    border: 2px solid #333;
    color: #333;
  }
`;


const Input = styled(TextareaAutosize)`
  max-width: 50rem;
  width: 100%;
  margin-bottom: 3rem;
  border: none;
  color: #555;
  font-family: arial;
  font-size: 2rem;
  font-weight: 600;
  background: transparent;
  resize: none;
  vertical-align: middle;

  & :focus {
    outline: none;
  }

  ::placeholder {
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
  gap: 1rem;
`;

const TextEditor = ({
  username,
  bookID,
  noteID,
  existingNote,
  initialContent,
  noteTitle,
  editMode,
}) => {
  const editor = useEditor(initialContent);
  const [isEditing, setIsEditing] = useState(editMode);
  const title = noteTitle;

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

  if (existingNote) {
    return (
      <>
        {isEditing && (
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
                    redirectAfterAdd={`/book?id=${bookID}`}
                  />
          
                  <DeleteNoteButton
                    username={username}
                    bookID={bookID}
                    noteID={noteID}
                    redirectAfterDelete={`/book?id=${bookID}`}
                  />               
                </Wrapper>
              </ButtonContainer>
            </EditorWrapper>
          </section>
        )}
        {!isEditing && (
          <section>
            <EditorWrapper>
              <EditButton
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                Edit
              </EditButton>
              <Input
                type="text"
                name=""
                id=""
                onChange={handleType}
                placeholder="Title..."
                value={input}
                readOnly
              />

              <Editor
                editorState={editor.editorState}
                onChange={editor.setEditorState}
                handleKeyCommand={(cmd) => handleKeyCommand(cmd)}
                placeholder="Start typing..."
                customStyleMap={styleMap}
                spellCheck={true}
                blockStyleFn={myBlockStyleFn}
                readOnly={true}
              />
            </EditorWrapper>
          </section>
        )}
      </>
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
          <ButtonContainer>
            <Wrapper>
              <AddNoteButton
                username={username}
                title={input !== "" ? input : "Untitled"}
                content={JSON.stringify(
                  converter.toContent(editor.editorState)
                )}
                date={new Date().toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                bookID={bookID}
                noteID={BSON.ObjectId()}
                redirectAfterAdd={`/book?id=${bookID}`}
              />
            </Wrapper>
          </ButtonContainer>

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
