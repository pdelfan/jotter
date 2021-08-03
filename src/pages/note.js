import React from "react";
import Layout from "../components/Page/Layout";
import { RedirectHome } from "../components/Routing";
import { convertFromRaw } from "draft-js";
import TextEditor from "../components/Editor/TextEditor";
import * as queryString from "query-string";
import { useAuth0 } from "@auth0/auth0-react";
import useFetchNote from "../hooks/useFetchNote";

const Note = ({ location }) => {
  const { user } = useAuth0();
  const bookID = queryString.parse(location.search).book;
  const noteID = queryString.parse(location.search).note;
  const { note, hasFetchedNote } = useFetchNote(user, bookID, noteID);

  if (bookID === null) {
    return <RedirectHome />;
  } else {
    return (
      <Layout>
        {hasFetchedNote && (
          <TextEditor
            username={user}
            bookID={bookID}
            noteID={noteID}
            initialContent={convertFromRaw(JSON.parse(note.content))}
            noteTitle={note.noteTitle}
            existingNote={true}
            editMode={false}
          />
        )}
      </Layout>
    );
  }
};

export default Note;
